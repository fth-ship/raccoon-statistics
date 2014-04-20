# Raccoon Statistics

## Install

  ```
  [sudo] npm i raccoon-statistics
  ```

## Example

  ```javascript
  var stats = require('raccoon-statistics')

  stats.mean([1, 2, 3, 4]) // 2.5

  stats.median([1, 2, 3, 4]) // 2.5

  stats.mode([1, 2, 3, 4]) // null

  stats.range([1, 2, 3, 4]) // 3

  stats.variance([1, 2, 3, 4]) // 1.12
  ```

Author: Kaique da Silva <kaique.developer@gmail.com>
