---
id: macbook-pro-2017
title: MacBook Pro (2017)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| 2,9 GHz Quad-Core Intel Core i7 | 16 GB 2133 MHz LPDDR3 | v16.10.0 | [@mobily](https://github.com/mobily) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  163,420.87  ops/sec  ±4.13%   (91 runs)  fastest
████████████████████████████████████████████████████████████████████


✔  remeda            12,127.37  ops/sec  ±5.21%   (81 runs)  -92.58%
█████


✔  ramda             65,815.14  ops/sec  ±4.75%   (86 runs)  -59.73%
███████████████████████████


✔  rambda           155,018.00  ops/sec  ±3.75%   (91 runs)  -5.14%
████████████████████████████████████████████████████████████████


✔  lodash/fp         48,188.57  ops/sec  ±4.34%   (88 runs)  -70.51%
████████████████████


✔  native            28,894.09  ops/sec  ±14.86%  (74 runs)  -82.32%
████████████
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  919,915.97  ops/sec  ±4.43%  (89 runs)  fastest
███████████████████████████████████████████████████████████████████


✔  remeda           193,455.13  ops/sec  ±5.61%  (80 runs)  -78.97%
██████████████


✔  ramda            116,813.04  ops/sec  ±3.86%  (89 runs)  -87.30%
████████


✔  rambda           757,985.17  ops/sec  ±3.80%  (93 runs)  -17.60%
███████████████████████████████████████████████████████


✔  lodash/fp        202,938.21  ops/sec  ±4.33%  (87 runs)  -77.94%
██████████████
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  2,180,724.99  ops/sec  ±3.60%  (88 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda             634,845.73  ops/sec  ±4.40%  (88 runs)  -70.89%
████████████████████


✔  ramda            1,388,329.42  ops/sec  ±3.14%  (88 runs)  -36.34%
███████████████████████████████████████████


✔  rambda           1,468,468.42  ops/sec  ±3.35%  (91 runs)  -32.66%
██████████████████████████████████████████████


✔  lodash/fp          730,406.74  ops/sec  ±4.96%  (92 runs)  -66.51%
███████████████████████


✔  native           1,427,287.11  ops/sec  ±5.38%  (87 runs)  -34.55%
█████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  1,874,674.36  ops/sec  ±9.15%  (85 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda             596,603.77  ops/sec  ±3.93%  (89 runs)  -68.18%
█████████████████████


✔  ramda              536,784.33  ops/sec  ±3.16%  (89 runs)  -71.37%
███████████████████


✔  rambda           1,287,215.25  ops/sec  ±4.22%  (86 runs)  -31.34%
███████████████████████████████████████████████


✔  lodash/fp          267,213.61  ops/sec  ±4.45%  (86 runs)  -85.75%
█████████


✔  native           1,388,857.55  ops/sec  ±4.91%  (84 runs)  -25.91%
███████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  22,586,534.80  ops/sec  ±3.94%  (87 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda             2,573,630.34  ops/sec  ±5.36%  (82 runs)  -88.61%
███████


✔  rambda            4,097,310.02  ops/sec  ±3.86%  (86 runs)  -81.86%
████████████


✔  lodash/fp         1,033,584.33  ops/sec  ±3.38%  (88 runs)  -95.42%
███
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,146,706.00  ops/sec  ±3.51%  (88 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda               906,118.89  ops/sec  ±3.80%  (90 runs)  -95.01%
███


✔  rambda            3,755,321.70  ops/sec  ±5.53%  (83 runs)  -79.31%
██████████████


✔  lodash/fp           870,913.98  ops/sec  ±2.45%  (93 runs)  -95.20%
███
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  15,772,156.65  ops/sec  ±3.41%  (92 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,291,780.21  ops/sec  ±4.30%  (85 runs)  -91.81%
█████


✔  ramda               733,596.52  ops/sec  ±4.12%  (90 runs)  -95.35%
███


✔  lodash/fp         7,674,019.14  ops/sec  ±4.75%  (85 runs)  -51.34%
██████████████████████████████████


✔  native              514,249.89  ops/sec  ±3.69%  (94 runs)  -96.74%
██
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  14,575,587.03  ops/sec  ±3.73%   (89 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,069,455.84  ops/sec  ±13.46%  (79 runs)  -92.66%
█████


✔  ramda               466,227.28  ops/sec  ±3.26%   (88 runs)  -96.80%
██


✔  lodash/fp         3,283,152.21  ops/sec  ±3.44%   (92 runs)  -77.47%
███████████████


✔  native              516,933.08  ops/sec  ±3.89%   (88 runs)  -96.45%
██
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  26,151,488.17  ops/sec  ±3.65%  (90 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda             6,375,909.20  ops/sec  ±4.55%  (82 runs)  -75.62%
█████████████████


✔  rambda           20,735,946.09  ops/sec  ±3.77%  (83 runs)  -20.71%
███████████████████████████████████████████████████████


✔  lodash/fp         5,821,822.35  ops/sec  ±3.50%  (89 runs)  -77.74%
███████████████
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,329,805.69  ops/sec  ±3.89%  (88 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda               894,213.52  ops/sec  ±3.68%  (87 runs)  -94.17%
████


✔  rambda           11,202,410.43  ops/sec  ±4.52%  (89 runs)  -26.92%
███████████████████████████████████████████████████


✔  lodash/fp           401,188.60  ops/sec  ±4.16%  (87 runs)  -97.38%
█
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  29,578,206.75  ops/sec  ±2.83%  (91 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,368,056.45  ops/sec  ±3.96%  (88 runs)  -95.37%
███


✔  ramda             7,048,026.36  ops/sec  ±4.37%  (86 runs)  -76.17%
████████████████


✔  rambda           21,865,426.84  ops/sec  ±4.01%  (87 runs)  -26.08%
███████████████████████████████████████████████████


✔  lodash/fp         6,671,135.61  ops/sec  ±3.61%  (89 runs)  -77.45%
███████████████
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,854,263.70  ops/sec  ±4.06%   (85 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,119,842.90  ops/sec  ±15.14%  (80 runs)  -92.94%
█████


✔  ramda               879,020.77  ops/sec  ±3.49%   (93 runs)  -94.46%
███


✔  rambda           10,241,112.48  ops/sec  ±4.16%   (87 runs)  -35.40%
█████████████████████████████████████████████


✔  lodash/fp           351,285.25  ops/sec  ±3.69%   (93 runs)  -97.78%
█
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  9,273,606.93  ops/sec  ±3.67%  (92 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda             575,856.06  ops/sec  ±4.63%  (87 runs)  -93.79%
████


✔  ramda              332,795.95  ops/sec  ±2.98%  (86 runs)  -96.41%
██


✔  rambda           8,674,252.98  ops/sec  ±3.72%  (88 runs)  -6.46%
████████████████████████████████████████████████████████████████


✔  lodash/fp        3,646,324.32  ops/sec  ±4.40%  (88 runs)  -60.68%
███████████████████████████


✔  native             414,005.69  ops/sec  ±4.10%  (90 runs)  -95.54%
███
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  8,986,539.43  ops/sec  ±3.99%  (91 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda             502,308.18  ops/sec  ±4.06%  (88 runs)  -94.41%
███


✔  ramda              263,208.99  ops/sec  ±4.13%  (87 runs)  -97.07%
██


✔  rambda           6,322,636.63  ops/sec  ±5.14%  (81 runs)  -29.64%
████████████████████████████████████████████████


✔  lodash/fp        2,232,570.43  ops/sec  ±4.93%  (84 runs)  -75.16%
█████████████████


✔  native             433,564.18  ops/sec  ±3.35%  (91 runs)  -95.18%
███
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  23,628,169.34  ops/sec  ±4.02%   (86 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,085,567.49  ops/sec  ±4.84%   (82 runs)  -95.41%
███


✔  ramda             3,638,199.91  ops/sec  ±12.07%  (74 runs)  -84.60%
██████████


✔  rambda            7,359,272.47  ops/sec  ±6.57%   (81 runs)  -68.85%
██████████████████████


✔  lodash/fp         4,541,350.46  ops/sec  ±3.72%   (93 runs)  -80.78%
█████████████


✔  native            8,583,536.31  ops/sec  ±3.82%   (90 runs)  -63.67%
█████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,241,354.95  ops/sec  ±3.58%   (90 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda              993,637.53  ops/sec  ±4.62%   (86 runs)  -93.48%
████


✔  ramda               778,823.99  ops/sec  ±4.23%   (90 runs)  -94.89%
███


✔  rambda            3,555,913.70  ops/sec  ±3.53%   (90 runs)  -76.67%
████████████████


✔  lodash/fp           352,289.75  ops/sec  ±10.74%  (91 runs)  -97.69%
█


✔  native            7,985,615.47  ops/sec  ±3.76%   (92 runs)  -47.61%
█████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  20,969,877.38  ops/sec  ±4.44%  (88 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,094,941.63  ops/sec  ±4.22%  (90 runs)  -94.78%
███


✔  ramda             7,470,408.83  ops/sec  ±3.07%  (88 runs)  -64.38%
████████████████████████


✔  rambda           19,851,587.88  ops/sec  ±4.35%  (88 runs)  -5.33%
██████████████████████████████████████████████████████████████████


✔  lodash/fp         3,342,844.79  ops/sec  ±3.35%  (88 runs)  -84.06%
███████████
```

→ Fastest is **@mobily/ts-belt**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  13,182,098.58  ops/sec  ±4.19%  (83 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,010,572.90  ops/sec  ±4.14%  (92 runs)  -92.33%
█████


✔  ramda               841,234.76  ops/sec  ±3.94%  (90 runs)  -93.62%
████


✔  rambda            9,846,374.33  ops/sec  ±3.43%  (91 runs)  -25.30%
████████████████████████████████████████████████████


✔  lodash/fp           336,442.29  ops/sec  ±3.67%  (90 runs)  -97.45%
█
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  21,966,880.80  ops/sec  ±3.81%  (89 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda            19,909,962.93  ops/sec  ±8.79%  (78 runs)  -9.36%
███████████████████████████████████████████████████████████████


✔  rambda           21,036,415.97  ops/sec  ±2.77%  (88 runs)  -4.24%
███████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt,ramda**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  13,613,941.75  ops/sec  ±3.95%  (88 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda               991,863.08  ops/sec  ±3.63%  (90 runs)  -92.71%
█████


✔  rambda           10,332,165.28  ops/sec  ±3.09%  (89 runs)  -24.11%
█████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  8,551,466.44  ops/sec  ±3.36%  (91 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda           7,345,015.00  ops/sec  ±4.82%  (86 runs)  -14.11%
███████████████████████████████████████████████████████████


✔  ramda            3,508,513.33  ops/sec  ±3.68%  (87 runs)  -58.97%
████████████████████████████


✔  rambda           7,130,464.13  ops/sec  ±4.45%  (86 runs)  -16.62%
█████████████████████████████████████████████████████████


✔  lodash/fp        6,052,605.45  ops/sec  ±3.42%  (90 runs)  -29.22%
████████████████████████████████████████████████


✔  native           7,854,120.72  ops/sec  ±4.64%  (90 runs)  -8.15%
███████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  8,370,028.82  ops/sec  ±3.03%  (92 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda           5,607,327.44  ops/sec  ±4.10%  (88 runs)  -33.01%
██████████████████████████████████████████████


✔  ramda              947,028.48  ops/sec  ±3.30%  (92 runs)  -88.69%
███████


✔  rambda           5,768,751.29  ops/sec  ±4.01%  (89 runs)  -31.08%
███████████████████████████████████████████████


✔  lodash/fp        1,277,630.70  ops/sec  ±2.82%  (93 runs)  -84.74%
██████████


✔  native           7,729,815.38  ops/sec  ±3.55%  (90 runs)  -7.65%
███████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  2,607,853.01  ops/sec  ±4.20%  (88 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda             702,117.69  ops/sec  ±3.50%  (88 runs)  -73.08%
██████████████████


✔  ramda              618,833.68  ops/sec  ±3.60%  (90 runs)  -76.27%
████████████████


✔  rambda           2,576,893.13  ops/sec  ±3.70%  (85 runs)  -1.19%
████████████████████████████████████████████████████████████████████


✔  lodash/fp        1,249,759.79  ops/sec  ±4.20%  (91 runs)  -52.08%
█████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  2,374,971.70  ops/sec  ±3.10%   (90 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda             657,744.51  ops/sec  ±3.57%   (90 runs)  -72.31%
███████████████████


✔  ramda              358,538.63  ops/sec  ±19.94%  (80 runs)  -84.90%
██████████


✔  rambda           2,014,071.06  ops/sec  ±6.56%   (83 runs)  -15.20%
███████████████████████████████████████████████████████████


✔  lodash/fp          269,497.72  ops/sec  ±15.15%  (91 runs)  -88.65%
███████
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  10,497,049.44  ops/sec  ±3.43%  (88 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,214,200.10  ops/sec  ±5.41%  (87 runs)  -88.43%
████████


✔  ramda             7,822,089.79  ops/sec  ±3.59%  (88 runs)  -25.48%
████████████████████████████████████████████████████


✔  rambda            8,326,397.71  ops/sec  ±3.82%  (89 runs)  -20.68%
███████████████████████████████████████████████████████


✔  lodash/fp         2,447,960.32  ops/sec  ±3.16%  (90 runs)  -76.68%
████████████████
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  7,577,891.03  ops/sec  ±3.75%  (87 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda           1,237,332.52  ops/sec  ±2.88%  (94 runs)  -83.67%
███████████


✔  ramda              899,891.44  ops/sec  ±3.93%  (91 runs)  -88.12%
████████


✔  rambda           5,591,799.02  ops/sec  ±3.52%  (90 runs)  -26.21%
██████████████████████████████████████████████████


✔  lodash/fp          367,499.48  ops/sec  ±3.72%  (85 runs)  -95.15%
███
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt   92,570,572.73  ops/sec  ±3.45%  (88 runs)  -9.96%
███████████████████████████████████████████████████████████████


✔  remeda             1,223,737.11  ops/sec  ±4.31%  (85 runs)  -98.81%



✔  ramda            102,815,558.52  ops/sec  ±2.69%  (88 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  rambda            93,119,843.45  ops/sec  ±3.46%  (89 runs)  -9.43%
████████████████████████████████████████████████████████████████


✔  lodash/fp          6,752,160.25  ops/sec  ±3.21%  (94 runs)  -93.43%
████


✔  native            13,319,384.62  ops/sec  ±3.43%  (94 runs)  -87.05%
█████████
```

→ Fastest is **ramda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  35,449,064.58  ops/sec  ±3.25%  (86 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,125,209.97  ops/sec  ±3.12%  (90 runs)  -96.83%
██


✔  ramda               933,865.63  ops/sec  ±9.73%  (81 runs)  -97.37%
█


✔  rambda           16,917,498.63  ops/sec  ±2.80%  (86 runs)  -52.28%
█████████████████████████████████


✔  lodash/fp           364,408.57  ops/sec  ±3.51%  (92 runs)  -98.97%



✔  native           11,191,165.53  ops/sec  ±2.67%  (93 runs)  -68.43%
██████████████████████
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt   9,309,458.87  ops/sec  ±3.27%  (88 runs)  -21.72%
██████████████████████████████████████████████████████


✔  remeda              902,467.56  ops/sec  ±3.47%  (86 runs)  -92.41%
█████


✔  ramda               441,903.69  ops/sec  ±2.81%  (91 runs)  -96.28%
██


✔  rambda            2,292,765.63  ops/sec  ±3.24%  (89 runs)  -80.72%
█████████████


✔  lodash/fp        11,892,925.94  ops/sec  ±3.90%  (90 runs)  fastest
██████████████████████████████████████████████████████████████████████
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  8,120,878.06  ops/sec  ±3.70%  (86 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda           1,057,185.59  ops/sec  ±3.38%  (94 runs)  -86.98%
████████


✔  ramda              342,411.77  ops/sec  ±3.82%  (89 runs)  -95.78%
██


✔  rambda           1,788,501.93  ops/sec  ±2.91%  (90 runs)  -77.98%
███████████████


✔  lodash/fp        3,792,856.25  ops/sec  ±3.72%  (93 runs)  -53.29%
████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  16,886,949.28  ops/sec  ±2.60%  (93 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           13,980,547.72  ops/sec  ±5.91%  (79 runs)  -17.21%
█████████████████████████████████████████████████████████


✔  ramda             4,194,140.27  ops/sec  ±3.41%  (91 runs)  -75.16%
█████████████████


✔  rambda           15,651,988.42  ops/sec  ±3.40%  (88 runs)  -7.31%
████████████████████████████████████████████████████████████████


✔  lodash/fp         6,615,780.95  ops/sec  ±3.59%  (89 runs)  -60.82%
███████████████████████████


✔  native           16,143,331.60  ops/sec  ±3.69%  (89 runs)  -4.40%
██████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  13,404,975.85  ops/sec  ±16.67%  (76 runs)  -16.56%
███████████████████████████████████████████████████████████


✔  remeda            9,193,164.78  ops/sec  ±2.67%   (90 runs)  -42.78%
████████████████████████████████████████


✔  ramda             1,006,705.10  ops/sec  ±3.17%   (91 runs)  -93.73%
████


✔  rambda            9,702,115.13  ops/sec  ±2.67%   (89 runs)  -39.61%
██████████████████████████████████████████


✔  lodash/fp         2,726,572.51  ops/sec  ±3.43%   (91 runs)  -83.03%
████████████


✔  native           16,066,225.44  ops/sec  ±3.57%   (89 runs)  fastest
███████████████████████████████████████████████████████████████████████
```

→ Fastest is **native**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  42,840,126.03  ops/sec  ±2.02%  (92 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,237,418.47  ops/sec  ±4.98%  (88 runs)  -97.11%
██


✔  ramda             9,200,184.87  ops/sec  ±3.74%  (88 runs)  -78.52%
███████████████


✔  rambda           42,666,141.45  ops/sec  ±3.08%  (89 runs)  -0.41%
█████████████████████████████████████████████████████████████████████


✔  lodash/fp         6,078,899.17  ops/sec  ±3.83%  (89 runs)  -85.81%
█████████


✔  native            8,561,048.25  ops/sec  ±3.03%  (91 runs)  -80.02%
█████████████
```

→ Fastest is **rambda**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,678,902.16  ops/sec  ±4.03%  (85 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,104,670.01  ops/sec  ±2.92%  (94 runs)  -94.39%
███


✔  ramda               959,449.08  ops/sec  ±3.32%  (92 runs)  -95.12%
███


✔  rambda           13,958,048.06  ops/sec  ±3.74%  (87 runs)  -29.07%
█████████████████████████████████████████████████


✔  lodash/fp           339,990.77  ops/sec  ±3.90%  (89 runs)  -98.27%
█


✔  native            7,789,880.17  ops/sec  ±4.41%  (90 runs)  -60.42%
███████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  25,796,827.58  ops/sec  ±3.29%   (90 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda              887,287.76  ops/sec  ±15.59%  (73 runs)  -96.56%
██


✔  ramda             7,788,107.36  ops/sec  ±3.11%   (85 runs)  -69.81%
█████████████████████


✔  rambda           23,606,751.11  ops/sec  ±4.96%   (81 runs)  -8.49%
████████████████████████████████████████████████████████████████


✔  lodash/fp         4,852,309.45  ops/sec  ±4.21%   (89 runs)  -81.19%
█████████████


✔  native            8,190,001.29  ops/sec  ±3.78%   (85 runs)  -68.25%
██████████████████████
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,321,215.36  ops/sec  ±3.48%  (92 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,069,760.00  ops/sec  ±3.59%  (88 runs)  -93.45%
████


✔  ramda               952,553.65  ops/sec  ±2.80%  (92 runs)  -94.16%
████


✔  rambda           11,757,498.63  ops/sec  ±3.58%  (87 runs)  -27.96%
██████████████████████████████████████████████████


✔  lodash/fp           335,480.46  ops/sec  ±6.36%  (90 runs)  -97.94%
█


✔  native            7,600,842.98  ops/sec  ±3.82%  (90 runs)  -53.43%
████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt   74,275,688.59  ops/sec  ±3.40%  (88 runs)  -26.19%
████████████████████████████████████████████████████


✔  remeda             1,463,627.69  ops/sec  ±3.09%  (89 runs)  -98.55%
█


✔  ramda             13,200,334.14  ops/sec  ±3.36%  (88 runs)  -86.88%
█████████


✔  rambda           100,632,751.74  ops/sec  ±3.38%  (92 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp          5,279,218.19  ops/sec  ±3.19%  (91 runs)  -94.75%
███


✔  native            17,455,311.88  ops/sec  ±2.90%  (92 runs)  -82.65%
████████████
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  30,073,359.48  ops/sec  ±3.73%  (84 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,215,472.67  ops/sec  ±3.34%  (90 runs)  -95.96%
██


✔  ramda               983,201.30  ops/sec  ±3.80%  (91 runs)  -96.73%
██


✔  rambda           16,265,881.72  ops/sec  ±3.02%  (90 runs)  -45.91%
█████████████████████████████████████


✔  lodash/fp           364,819.13  ops/sec  ±3.70%  (93 runs)  -98.79%



✔  native           14,432,535.74  ops/sec  ±3.29%  (91 runs)  -52.01%
█████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  11,093,187.86  ops/sec  ±17.49%  (71 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,200,886.75  ops/sec  ±4.08%   (87 runs)  -89.17%
███████


✔  ramda             4,335,534.27  ops/sec  ±3.71%   (86 runs)  -60.92%
███████████████████████████


✔  rambda            6,926,551.79  ops/sec  ±4.05%   (84 runs)  -37.56%
████████████████████████████████████████████


✔  lodash/fp         4,732,706.91  ops/sec  ±3.10%   (90 runs)  -57.34%
██████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  9,693,171.24  ops/sec  ±3.62%  (89 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda           1,505,418.60  ops/sec  ±3.51%  (89 runs)  -84.47%
██████████


✔  ramda              665,677.75  ops/sec  ±2.72%  (96 runs)  -93.13%
████


✔  rambda           4,755,392.05  ops/sec  ±4.50%  (84 runs)  -50.94%
█████████████████████████████████


✔  lodash/fp          363,711.44  ops/sec  ±4.18%  (88 runs)  -96.25%
██
```

→ Fastest is **@mobily/ts-belt**
