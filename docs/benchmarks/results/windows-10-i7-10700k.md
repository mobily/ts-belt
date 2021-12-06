---
id: windows-10-i7-10700k
title: Windows 10 (i7 10700k)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| i7 10700k | 32 GB | v16.13.0 | [@domeknn](https://github.com/domeknn) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  274,087.61  ops/sec  ±1.80%  (88 runs)  fastest
✔  remeda            18,735.65  ops/sec  ±4.30%  (82 runs)  -93.16%
✔  ramda            113,133.81  ops/sec  ±3.62%  (80 runs)  -58.72%
✔  rambda           229,413.07  ops/sec  ±5.36%  (77 runs)  -16.30%
✔  lodash/fp         41,981.44  ops/sec  ±3.51%  (76 runs)  -84.68%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  1,457,783.47  ops/sec  ±4.12%  (87 runs)  fastest
✔  remeda             271,365.52  ops/sec  ±5.28%  (74 runs)  -81.39%
✔  ramda              139,708.87  ops/sec  ±4.33%  (78 runs)  -90.42%
✔  rambda           1,085,267.39  ops/sec  ±3.43%  (81 runs)  -25.55%
✔  lodash/fp          287,683.71  ops/sec  ±1.86%  (86 runs)  -80.27%
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  4,844,379.86  ops/sec  ±0.36%  (94 runs)  fastest
✔  remeda           1,100,055.37  ops/sec  ±0.34%  (92 runs)  -77.29%
✔  ramda            2,303,462.68  ops/sec  ±0.37%  (98 runs)  -52.45%
✔  rambda           2,395,226.78  ops/sec  ±0.72%  (97 runs)  -50.56%
✔  lodash/fp        1,018,844.48  ops/sec  ±1.92%  (96 runs)  -78.97%
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  4,372,888.07  ops/sec  ±0.63%  (93 runs)  fastest
✔  remeda           1,058,463.52  ops/sec  ±0.63%  (94 runs)  -75.79%
✔  ramda              848,437.12  ops/sec  ±0.71%  (95 runs)  -80.60%
✔  rambda           2,165,860.76  ops/sec  ±1.11%  (98 runs)  -50.47%
✔  lodash/fp          376,990.89  ops/sec  ±0.62%  (94 runs)  -91.38%
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  44,314,331.48  ops/sec  ±2.03%  (91 runs)  fastest
✔  lodash/fp         1,909,827.39  ops/sec  ±0.35%  (95 runs)  -95.69%
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  30,165,287.55  ops/sec  ±1.72%  (92 runs)  fastest
✔  lodash/fp         1,423,066.66  ops/sec  ±0.87%  (94 runs)  -95.28%
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  28,595,216.92  ops/sec  ±1.23%  (90 runs)  fastest
✔  remeda            2,091,907.50  ops/sec  ±0.41%  (96 runs)  -92.68%
✔  ramda             1,073,755.11  ops/sec  ±0.64%  (93 runs)  -96.24%
✔  rambda           16,537,613.50  ops/sec  ±1.12%  (93 runs)  -42.17%
✔  lodash/fp        14,712,334.27  ops/sec  ±1.22%  (92 runs)  -48.55%
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,976,068.13  ops/sec  ±1.00%  (94 runs)  fastest
✔  remeda            1,840,930.34  ops/sec  ±1.23%  (98 runs)  -93.42%
✔  ramda               649,122.31  ops/sec  ±0.55%  (95 runs)  -97.68%
✔  rambda           11,268,361.49  ops/sec  ±1.41%  (87 runs)  -59.72%
✔  lodash/fp         4,905,907.22  ops/sec  ±1.15%  (97 runs)  -82.46%
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  44,394,831.55  ops/sec  ±0.91%  (93 runs)  fastest
✔  ramda            11,071,778.57  ops/sec  ±0.34%  (95 runs)  -75.06%
✔  rambda           42,660,554.66  ops/sec  ±0.91%  (93 runs)  -3.91%
✔  lodash/fp         9,227,280.89  ops/sec  ±0.74%  (96 runs)  -79.22%
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  25,946,617.96  ops/sec  ±2.15%  (90 runs)  fastest
✔  ramda             1,293,278.57  ops/sec  ±0.65%  (95 runs)  -95.02%
✔  rambda           17,525,417.08  ops/sec  ±2.41%  (91 runs)  -32.46%
✔  lodash/fp           516,443.96  ops/sec  ±1.86%  (92 runs)  -98.01%
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  44,343,170.19  ops/sec  ±1.88%  (87 runs)  fastest
✔  remeda            2,141,766.60  ops/sec  ±0.51%  (96 runs)  -95.17%
✔  ramda            12,011,983.78  ops/sec  ±0.78%  (94 runs)  -72.91%
✔  rambda           44,076,286.17  ops/sec  ±2.03%  (87 runs)  -0.60%
✔  lodash/fp         9,665,755.38  ops/sec  ±0.81%  (96 runs)  -78.20%
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  26,895,450.79  ops/sec  ±2.33%  (89 runs)  fastest
✔  remeda            2,092,112.50  ops/sec  ±1.32%  (95 runs)  -92.22%
✔  ramda             1,292,628.44  ops/sec  ±0.73%  (94 runs)  -95.19%
✔  rambda           18,541,712.79  ops/sec  ±1.86%  (91 runs)  -31.06%
✔  lodash/fp           510,494.32  ops/sec  ±1.63%  (93 runs)  -98.10%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  17,255,742.80  ops/sec  ±1.12%  (89 runs)  fastest
✔  remeda              833,693.59  ops/sec  ±1.30%  (95 runs)  -95.17%
✔  ramda               472,984.87  ops/sec  ±0.75%  (97 runs)  -97.26%
✔  rambda           16,304,977.27  ops/sec  ±1.64%  (91 runs)  -5.51%
✔  lodash/fp         6,097,275.05  ops/sec  ±1.01%  (90 runs)  -64.67%
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,998,163.08  ops/sec  ±1.37%  (91 runs)  fastest
✔  remeda              711,222.63  ops/sec  ±2.27%  (88 runs)  -95.82%
✔  ramda               381,240.74  ops/sec  ±0.68%  (94 runs)  -97.76%
✔  rambda           11,170,424.62  ops/sec  ±2.53%  (87 runs)  -34.28%
✔  lodash/fp         3,486,824.86  ops/sec  ±0.95%  (94 runs)  -79.49%
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  36,542,878.93  ops/sec  ±1.16%  (90 runs)  fastest
✔  remeda            1,745,103.54  ops/sec  ±0.34%  (95 runs)  -95.22%
✔  ramda             6,559,286.43  ops/sec  ±0.83%  (97 runs)  -82.05%
✔  rambda           12,230,472.04  ops/sec  ±2.19%  (89 runs)  -66.53%
✔  lodash/fp         6,494,773.26  ops/sec  ±1.47%  (92 runs)  -82.23%
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  22,830,729.27  ops/sec  ±1.85%  (91 runs)  fastest
✔  remeda            1,556,878.07  ops/sec  ±1.00%  (94 runs)  -93.18%
✔  ramda             1,164,858.90  ops/sec  ±0.80%  (97 runs)  -94.90%
✔  rambda            5,378,998.62  ops/sec  ±1.75%  (89 runs)  -76.44%
✔  lodash/fp           534,048.88  ops/sec  ±1.46%  (92 runs)  -97.66%
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  34,266,714.51  ops/sec  ±2.12%  (86 runs)  fastest
✔  remeda            1,718,784.83  ops/sec  ±0.53%  (94 runs)  -94.98%
✔  ramda            12,188,613.68  ops/sec  ±1.42%  (90 runs)  -64.43%
✔  rambda           32,030,052.94  ops/sec  ±2.94%  (81 runs)  -6.53%
✔  lodash/fp         5,079,506.24  ops/sec  ±1.00%  (91 runs)  -85.18%
```

→ Fastest is **@mobily/ts-belt**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,578,173.53  ops/sec  ±2.59%  (84 runs)  fastest
✔  remeda            1,551,093.32  ops/sec  ±1.36%  (90 runs)  -92.08%
✔  ramda             1,324,530.12  ops/sec  ±0.95%  (96 runs)  -93.23%
✔  rambda           16,486,376.42  ops/sec  ±1.69%  (88 runs)  -15.79%
✔  lodash/fp           496,828.78  ops/sec  ±1.38%  (90 runs)  -97.46%
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  34,024,014.84  ops/sec  ±2.02%  (86 runs)
✔  ramda            33,497,312.31  ops/sec  ±1.78%  (88 runs)
✔  rambda           33,564,607.96  ops/sec  ±2.27%  (88 runs)
```

→ No discernible winner

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  23,182,779.69  ops/sec  ±2.08%  (88 runs)  fastest
✔  ramda             1,511,735.29  ops/sec  ±0.63%  (95 runs)  -93.48%
✔  rambda           17,414,967.73  ops/sec  ±0.98%  (93 runs)  -24.88%
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  16,874,250.67  ops/sec  ±0.23%  (98 runs)  fastest
✔  remeda           15,201,474.73  ops/sec  ±0.22%  (98 runs)  -9.91%
✔  ramda             5,780,439.61  ops/sec  ±1.23%  (95 runs)  -65.74%
✔  rambda           13,777,535.57  ops/sec  ±4.63%  (95 runs)  -18.35%
✔  lodash/fp        10,757,740.19  ops/sec  ±1.90%  (95 runs)  -36.25%
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,067,530.64  ops/sec  ±4.39%  (94 runs)  fastest
✔  remeda           10,388,167.68  ops/sec  ±1.81%  (89 runs)  -35.35%
✔  ramda             1,401,732.40  ops/sec  ±0.86%  (97 runs)  -91.28%
✔  rambda           10,798,945.36  ops/sec  ±0.97%  (93 runs)  -32.79%
✔  lodash/fp         1,669,758.08  ops/sec  ±0.67%  (91 runs)  -89.61%
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  4,198,534.69  ops/sec  ±0.81%  (90 runs)  fastest
✔  remeda           1,145,154.40  ops/sec  ±0.33%  (96 runs)  -72.72%
✔  ramda            1,017,820.38  ops/sec  ±0.91%  (95 runs)  -75.76%
✔  rambda           4,176,668.42  ops/sec  ±1.36%  (96 runs)  -0.52%
✔  lodash/fp        2,024,891.48  ops/sec  ±1.30%  (94 runs)  -51.77%
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  3,822,024.67  ops/sec  ±1.13%  (96 runs)  fastest
✔  remeda           1,086,479.19  ops/sec  ±0.87%  (97 runs)  -71.57%
✔  ramda              563,730.96  ops/sec  ±0.80%  (94 runs)  -85.25%
✔  rambda           3,435,938.37  ops/sec  ±0.74%  (91 runs)  -10.10%
✔  lodash/fp          409,581.80  ops/sec  ±1.27%  (96 runs)  -89.28%
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  16,561,039.31  ops/sec  ±1.38%  (89 runs)  fastest
✔  remeda            1,930,383.26  ops/sec  ±0.33%  (94 runs)  -88.34%
✔  ramda            13,143,191.31  ops/sec  ±2.32%  (87 runs)  -20.64%
✔  rambda           13,555,345.79  ops/sec  ±2.19%  (92 runs)  -18.15%
✔  lodash/fp         2,989,782.14  ops/sec  ±1.29%  (93 runs)  -81.95%
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,355,843.31  ops/sec  ±3.41%  (86 runs)  fastest
✔  remeda            1,860,929.73  ops/sec  ±1.62%  (93 runs)  -83.61%
✔  ramda             1,340,224.56  ops/sec  ±0.93%  (96 runs)  -88.20%
✔  rambda            9,185,207.21  ops/sec  ±1.68%  (93 runs)  -19.11%
✔  lodash/fp           499,818.21  ops/sec  ±1.42%  (94 runs)  -95.60%
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  224,863,950.23  ops/sec  ±0.41%  (96 runs)  fastest
✔  remeda             1,982,218.79  ops/sec  ±0.31%  (92 runs)  -99.12%
✔  ramda            187,611,655.84  ops/sec  ±0.91%  (94 runs)  -16.57%
✔  rambda           223,518,053.91  ops/sec  ±0.84%  (93 runs)  -0.60%
✔  lodash/fp          6,843,790.60  ops/sec  ±0.60%  (97 runs)  -96.96%
```

→ Fastest is **@mobily/ts-belt**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  63,337,180.44  ops/sec  ±1.53%  (96 runs)  fastest
✔  remeda            1,661,070.94  ops/sec  ±1.20%  (91 runs)  -97.38%
✔  ramda             1,514,416.39  ops/sec  ±0.67%  (93 runs)  -97.61%
✔  rambda           29,730,114.05  ops/sec  ±1.35%  (91 runs)  -53.06%
✔  lodash/fp           518,280.40  ops/sec  ±1.38%  (94 runs)  -99.18%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  18,711,511.37  ops/sec  ±0.47%  (92 runs)  -14.09%
✔  remeda            1,410,372.51  ops/sec  ±0.48%  (96 runs)  -93.52%
✔  ramda               682,051.59  ops/sec  ±0.66%  (94 runs)  -96.87%
✔  rambda            3,634,737.38  ops/sec  ±1.37%  (96 runs)  -83.31%
✔  lodash/fp        21,779,258.73  ops/sec  ±1.26%  (90 runs)  fastest
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,172,281.51  ops/sec  ±1.72%  (91 runs)  fastest
✔  remeda            1,626,638.39  ops/sec  ±0.67%  (95 runs)  -91.05%
✔  ramda               489,114.32  ops/sec  ±0.54%  (97 runs)  -97.31%
✔  rambda            2,831,537.50  ops/sec  ±1.33%  (93 runs)  -84.42%
✔  lodash/fp         6,288,751.99  ops/sec  ±1.37%  (93 runs)  -65.39%
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  30,094,180.54  ops/sec  ±2.56%  (90 runs)  -1.56%
✔  remeda           30,569,819.68  ops/sec  ±1.46%  (93 runs)  fastest
✔  ramda             6,671,553.70  ops/sec  ±1.41%  (94 runs)  -78.18%
✔  rambda           28,177,057.11  ops/sec  ±2.56%  (83 runs)  -7.83%
✔  lodash/fp         9,531,807.10  ops/sec  ±1.54%  (91 runs)  -68.82%
```

→ Fastest is **remeda**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,144,869.97  ops/sec  ±3.01%  (88 runs)  fastest
✔  remeda           16,076,727.01  ops/sec  ±1.84%  (90 runs)  -42.88%
✔  ramda             1,515,745.54  ops/sec  ±0.68%  (91 runs)  -94.61%
✔  rambda           16,557,742.06  ops/sec  ±2.67%  (89 runs)  -41.17%
✔  lodash/fp         3,658,465.00  ops/sec  ±1.78%  (91 runs)  -87.00%
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  73,789,578.60  ops/sec  ±1.41%  (93 runs)  fastest
✔  remeda            1,900,821.58  ops/sec  ±0.46%  (97 runs)  -97.42%
✔  ramda            15,763,623.67  ops/sec  ±1.05%  (94 runs)  -78.64%
✔  rambda           73,617,135.24  ops/sec  ±2.35%  (89 runs)  -0.23%
✔  lodash/fp         8,951,388.79  ops/sec  ±0.84%  (93 runs)  -87.87%
```

→ Fastest is **@mobily/ts-belt**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,441,615.57  ops/sec  ±2.10%  (86 runs)  fastest
✔  remeda            1,632,972.21  ops/sec  ±1.15%  (95 runs)  -95.12%
✔  ramda             1,415,346.80  ops/sec  ±0.70%  (95 runs)  -95.77%
✔  rambda           22,809,988.20  ops/sec  ±1.52%  (92 runs)  -31.79%
✔  lodash/fp           512,445.04  ops/sec  ±1.41%  (93 runs)  -98.47%
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  43,147,761.51  ops/sec  ±1.79%  (87 runs)  fastest
✔  remeda            1,705,779.65  ops/sec  ±0.45%  (94 runs)  -96.05%
✔  ramda            13,604,680.28  ops/sec  ±1.56%  (93 runs)  -68.47%
✔  rambda           42,955,938.38  ops/sec  ±2.08%  (89 runs)  -0.44%
✔  lodash/fp         5,700,672.83  ops/sec  ±0.82%  (96 runs)  -86.79%
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,129,940.60  ops/sec  ±1.88%  (89 runs)  fastest
✔  remeda            1,600,260.33  ops/sec  ±1.13%  (94 runs)  -94.10%
✔  ramda             1,395,296.08  ops/sec  ±0.72%  (94 runs)  -94.86%
✔  rambda           17,388,372.38  ops/sec  ±2.27%  (84 runs)  -35.91%
✔  lodash/fp           435,038.68  ops/sec  ±3.77%  (89 runs)  -98.40%
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  165,980,483.43  ops/sec  ±0.80%  (89 runs)  -23.57%
✔  remeda             2,147,044.48  ops/sec  ±0.81%  (96 runs)  -99.01%
✔  ramda             23,086,229.13  ops/sec  ±0.84%  (94 runs)  -89.37%
✔  rambda           217,176,455.61  ops/sec  ±0.71%  (96 runs)  fastest
✔  lodash/fp          5,880,443.07  ops/sec  ±0.55%  (95 runs)  -97.29%
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  56,982,799.04  ops/sec  ±1.50%  (91 runs)  fastest
✔  remeda            1,738,877.25  ops/sec  ±1.33%  (93 runs)  -96.95%
✔  ramda             1,468,491.62  ops/sec  ±0.81%  (97 runs)  -97.42%
✔  rambda           28,850,300.98  ops/sec  ±2.06%  (88 runs)  -49.37%
✔  lodash/fp           485,977.95  ops/sec  ±1.33%  (95 runs)  -99.15%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  23,497,824.41  ops/sec  ±1.89%  (88 runs)  fastest
✔  remeda            1,892,705.69  ops/sec  ±0.34%  (96 runs)  -91.95%
✔  ramda             7,635,058.96  ops/sec  ±1.24%  (94 runs)  -67.51%
✔  rambda           12,642,790.58  ops/sec  ±1.36%  (93 runs)  -46.20%
✔  lodash/fp         7,849,036.76  ops/sec  ±1.24%  (94 runs)  -66.60%
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,014,283.43  ops/sec  ±2.07%  (91 runs)  fastest
✔  remeda            2,275,452.49  ops/sec  ±1.51%  (95 runs)  -85.79%
✔  ramda             1,109,650.29  ops/sec  ±0.64%  (98 runs)  -93.07%
✔  rambda            8,824,039.70  ops/sec  ±1.24%  (93 runs)  -44.90%
✔  lodash/fp           554,916.81  ops/sec  ±0.57%  (92 runs)  -96.53%
```

→ Fastest is **@mobily/ts-belt**
