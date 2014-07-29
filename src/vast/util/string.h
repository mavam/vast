#ifndef VAST_UTIL_STRING_H
#define VAST_UTIL_STRING_H

#include <cassert>
#include <string>
#include <vector>

namespace vast {
namespace util {

/// Escapes all non-printable characters in a string with `\xAA` where `AA` is
/// the byte in hexadecimal representation.
/// @param str The string to escape.
/// @param all If `true` escapes every single character in *str*.
/// @returns The escaped string of *str*.
/// @relates byte_unescape
std::string byte_escape(std::string const& str, bool all = false);

/// Unescapes a byte-escaped string, i.e., replaces all occurrences of `\xAA`
/// with the value of the byte `AA`.
/// @param str The string to unescape.
/// @returns The unescaped string of *str*.
/// @relates byte_escape
std::string byte_unescape(std::string const& str);

/// Escapes a string according to JSON escaping.
/// @param str The string to escape.
/// @returns The escaped string.
/// @relates json_unescape
std::string json_escape(std::string const& str);

/// Unescapes a string escaped with JSON escaping.
/// @param str The string to unescape.
/// @returns The unescaped string.
/// @relates json_escape
std::string json_unescape(std::string const& str);

/// Splits a string into a vector of iterator pairs representing the
/// *[start, end)* range of each element.
/// @tparam Iterator A random-access iterator to a character sequence.
/// @param begin The beginning of the string to split.
/// @param end The end of the string to split.
/// @param sep The seperator where to split.
/// @param esc The escape string. If *esc* occurrs immediately in front of
///            *sep*, then *sep* will not count as a separator.
/// @param max_splits The maximum number of splits to perform.
/// @param include_sep If `true`, also include the separator after each
///                    match.
/// @pre `! sep.empty()`
/// @returns A vector of iterator pairs each of which delimit a single field
///          with a range *[start, end)*.
/// @todo Implement regex-based splitting. At this point the parameter
///       *include_sep* has not much significance.
template <typename Iterator>
std::vector<std::pair<Iterator, Iterator>>
split(Iterator begin, Iterator end, std::string const& sep, std::string const& esc = "",
      int max_splits = -1, bool include_sep = false)
{
  assert(! sep.empty());

  std::vector<std::pair<Iterator, Iterator>> pos;

  int splits = 0;
  auto i = begin;
  auto prev = i;
  while (i != end)
  {
    // Find a separator that fits in the string.
    if (*i != sep[0] || i + sep.size() > end)
    {
      ++i;
      continue;
    }

    // Check remaining separator characters.
    size_t j = 1;
    auto s = i;
    while (j < sep.size())
      if (*++s != sep[j])
        break;
      else
        ++j;

    // No separator match.
    if (j != sep.size())
    {
      ++i;
      continue;
    }

    // Make sure it's not an escaped match.
    if (! esc.empty() && esc.size() < static_cast<size_t>(i - begin))
    {
      auto escaped = true;
      auto esc_start = i - esc.size();
      for (size_t j = 0; j < esc.size(); ++j)
        if (esc_start[j] != esc[j])
        {
          escaped = false;
          break;
        }

      if (escaped)
      {
        ++i;
        continue;
      }
    }

    if (++splits == max_splits)
      break;

    pos.emplace_back(prev, i);
    if (include_sep)
      pos.emplace_back(i, i + sep.size());

    i += sep.size();
    prev = i;
  }

  if (prev != end)
    pos.emplace_back(prev, end);

  return pos;
}

} // namespace util
} // namespace vast

#endif
