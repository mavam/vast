include "root" {
  path = find_in_parent_folders()
}

dependency "step_2" {
  config_path = "../core-2"

  mock_outputs = {
    vast_lambda_name      = "temporary-dummy-name"
    vast_lambda_arn       = "arn:aws:lambda:::function:temporary-dummy-arn"
    vast_lambda_role_name = "temporary-dummy-name"
  }
}

locals {
  region_name          = get_env("VAST_AWS_REGION")
  source_bucket_name   = get_env("VAST_CLOUDTRAIL_BUCKET_NAME", "temporary-dummy-name")
  source_bucket_region = get_env("VAST_CLOUDTRAIL_BUCKET_REGION", "us-east-1") # needs to be a real region to pass validation
  s3_subcmd            = "aws s3 --region ${local.source_bucket_region} cp s3://${local.source_bucket_name}/$SRC_KEY -"
  vast_subcmd          = "vast import --type=aws.cloudtrail json"
  import_cmd           = "${local.s3_subcmd} | gzip -d | jq  -c '.Records[]' | ${local.vast_subcmd}"
}


terraform {
  after_hook "enable_eventbridge_notifications" {
    commands = ["apply"]
    # path relative to common/s3proc
    execute  = ["../bucket-notif.bash", local.source_bucket_region, local.source_bucket_name]
  }
  source = "..//common/s3proc"
}

inputs = {
  region_name           = local.region_name
  source_name           = "flowlogs"
  source_bucket_name    = local.source_bucket_name
  source_bucket_region  = local.source_bucket_region
  vast_lambda_name      = dependency.step_2.outputs.vast_lambda_name
  vast_lambda_arn       = dependency.step_2.outputs.vast_lambda_arn
  vast_lambda_role_name = dependency.step_2.outputs.vast_lambda_role_name
  import_cmd            = local.import_cmd
}
