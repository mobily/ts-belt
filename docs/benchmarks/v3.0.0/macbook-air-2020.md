---
id: macbook-air-2020
title: MacBook Air (M1, 2020)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| Apple M1 | 16 GB LPDDR4| v17.0.1 | [@panr](https://github.com/panr) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  249,953.41  ops/sec  ±0.13%  (101 runs)  fastest
✔  remeda            25,063.45  ops/sec  ±1.79%  (91 runs)   -89.97%
✔  ramda            128,775.82  ops/sec  ±0.31%  (99 runs)   -48.48%
✔  rambda           245,417.43  ops/sec  ±0.36%  (100 runs)  -1.81%
✔  lodash/fp         66,199.93  ops/sec  ±0.57%  (99 runs)   -73.52%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  2,232,731.32  ops/sec  ±0.12%  (101 runs)  fastest
✔  remeda             491,977.09  ops/sec  ±2.20%  (97 runs)   -77.97%
✔  ramda              267,914.93  ops/sec  ±0.86%  (97 runs)   -88.00%
✔  rambda           1,713,610.43  ops/sec  ±1.02%  (97 runs)   -23.25%
✔  lodash/fp          521,001.69  ops/sec  ±1.24%  (97 runs)   -76.67%
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  5,159,518.62  ops/sec  ±0.15%  (101 runs)  fastest
✔  remeda           1,482,448.61  ops/sec  ±0.79%  (98 runs)   -71.27%
✔  ramda            2,638,349.13  ops/sec  ±0.47%  (92 runs)   -48.86%
✔  rambda           2,749,188.82  ops/sec  ±0.52%  (96 runs)   -46.72%
✔  lodash/fp        1,477,230.63  ops/sec  ±2.06%  (97 runs)   -71.37%
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  4,667,074.10  ops/sec  ±0.50%  (96 runs)  fastest
✔  remeda           1,380,525.81  ops/sec  ±1.35%  (91 runs)  -70.42%
✔  ramda            1,216,090.51  ops/sec  ±0.57%  (95 runs)  -73.94%
✔  rambda           2,467,299.26  ops/sec  ±0.57%  (99 runs)  -47.13%
✔  lodash/fp          654,875.57  ops/sec  ±1.71%  (97 runs)  -85.97%
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  45,331,676.08  ops/sec  ±2.52%  (95 runs)  fastest
✔  lodash/fp         2,100,106.38  ops/sec  ±1.45%  (95 runs)  -95.37%
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,902,510.34  ops/sec  ±1.26%  (88 runs)  fastest
✔  lodash/fp         1,825,703.55  ops/sec  ±0.54%  (96 runs)  -94.61%
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  29,534,944.35  ops/sec  ±0.42%  (98 runs)   fastest
✔  remeda            3,103,334.61  ops/sec  ±1.34%  (97 runs)   -89.49%
✔  ramda             1,667,771.72  ops/sec  ±0.79%  (92 runs)   -94.35%
✔  rambda           14,680,254.24  ops/sec  ±0.70%  (100 runs)  -50.30%
✔  lodash/fp        15,699,411.53  ops/sec  ±1.11%  (97 runs)   -46.84%
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,858,327.05  ops/sec  ±1.38%  (99 runs)  fastest
✔  remeda            2,651,171.90  ops/sec  ±1.11%  (97 runs)  -90.48%
✔  ramda             1,009,620.84  ops/sec  ±0.60%  (99 runs)  -96.38%
✔  rambda           11,817,225.86  ops/sec  ±0.59%  (96 runs)  -57.58%
✔  lodash/fp         6,207,174.40  ops/sec  ±1.24%  (96 runs)  -77.72%
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  42,957,887.24  ops/sec  ±0.56%  (101 runs)  fastest
✔  ramda            15,269,941.76  ops/sec  ±0.26%  (101 runs)  -64.45%
✔  rambda           39,177,484.94  ops/sec  ±1.10%  (98 runs)   -8.80%
✔  lodash/fp        12,422,270.83  ops/sec  ±0.68%  (101 runs)  -71.08%
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  31,759,831.19  ops/sec  ±1.48%  (95 runs)  fastest
✔  ramda             1,993,047.66  ops/sec  ±0.47%  (97 runs)  -93.72%
✔  rambda           22,042,138.42  ops/sec  ±1.00%  (96 runs)  -30.60%
✔  lodash/fp           977,831.48  ops/sec  ±1.57%  (95 runs)  -96.92%
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  51,091,352.21  ops/sec  ±0.71%  (99 runs)   fastest
✔  remeda            3,298,014.67  ops/sec  ±0.81%  (99 runs)   -93.54%
✔  ramda            15,583,472.56  ops/sec  ±0.48%  (94 runs)   -69.50%
✔  rambda           46,032,144.39  ops/sec  ±1.81%  (91 runs)   -9.90%
✔  lodash/fp        13,551,195.71  ops/sec  ±0.85%  (101 runs)  -73.48%
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  34,174,457.96  ops/sec  ±0.96%  (100 runs)  fastest
✔  remeda            3,216,097.80  ops/sec  ±0.89%  (100 runs)  -90.59%
✔  ramda             2,044,004.20  ops/sec  ±0.38%  (102 runs)  -94.02%
✔  rambda           23,157,339.24  ops/sec  ±0.91%  (96 runs)   -32.24%
✔  lodash/fp           891,834.62  ops/sec  ±1.21%  (101 runs)  -97.39%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  16,538,319.46  ops/sec  ±0.54%  (99 runs)  fastest
✔  remeda            1,416,540.10  ops/sec  ±1.77%  (94 runs)  -91.43%
✔  ramda               701,492.07  ops/sec  ±0.53%  (97 runs)  -95.76%
✔  rambda           14,731,465.99  ops/sec  ±0.78%  (99 runs)  -10.93%
✔  lodash/fp         7,094,316.19  ops/sec  ±0.59%  (99 runs)  -57.10%
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,213,364.27  ops/sec  ±0.58%  (97 runs)  fastest
✔  remeda            1,215,004.37  ops/sec  ±1.01%  (98 runs)  -92.51%
✔  ramda               533,115.00  ops/sec  ±0.61%  (98 runs)  -96.71%
✔  rambda           11,473,907.92  ops/sec  ±1.21%  (91 runs)  -29.23%
✔  lodash/fp         4,440,750.16  ops/sec  ±0.77%  (94 runs)  -72.61%
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  42,793,420.73  ops/sec  ±0.44%  (96 runs)   fastest
✔  remeda            2,608,239.95  ops/sec  ±0.85%  (100 runs)  -93.91%
✔  ramda             9,523,701.00  ops/sec  ±0.99%  (93 runs)   -77.74%
✔  rambda           14,925,277.68  ops/sec  ±1.79%  (95 runs)   -65.12%
✔  lodash/fp         9,468,034.48  ops/sec  ±1.09%  (96 runs)   -77.88%
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,487,868.43  ops/sec  ±1.45%  (100 runs)  fastest
✔  remeda            2,524,317.83  ops/sec  ±0.74%  (97 runs)   -90.82%
✔  ramda             1,721,551.22  ops/sec  ±0.84%  (90 runs)   -93.74%
✔  rambda            7,283,236.59  ops/sec  ±1.11%  (95 runs)   -73.50%
✔  lodash/fp           967,717.39  ops/sec  ±1.32%  (94 runs)   -96.48%
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  41,254,015.97  ops/sec  ±0.27%  (100 runs)  -3.05%
✔  remeda            2,611,932.18  ops/sec  ±1.03%  (99 runs)   -93.86%
✔  ramda            15,271,065.84  ops/sec  ±1.33%  (93 runs)   -64.11%
✔  rambda           42,553,228.84  ops/sec  ±1.01%  (97 runs)   fastest
✔  lodash/fp         7,033,601.60  ops/sec  ±0.62%  (100 runs)  -83.47%
```

→ Fastest is **rambda**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,064,113.91  ops/sec  ±1.25%  (99 runs)   fastest
✔  remeda            2,365,427.75  ops/sec  ±0.81%  (99 runs)   -91.57%
✔  ramda             2,063,416.35  ops/sec  ±0.47%  (102 runs)  -92.65%
✔  rambda           20,783,366.09  ops/sec  ±0.72%  (98 runs)   -25.94%
✔  lodash/fp           899,425.40  ops/sec  ±1.17%  (99 runs)   -96.80%
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  40,230,899.34  ops/sec  ±0.43%  (99 runs)   fastest
✔  ramda            39,253,339.46  ops/sec  ±0.30%  (101 runs)  -2.43%
✔  rambda           39,763,893.81  ops/sec  ±1.06%  (100 runs)  -1.16%
```

→ Fastest is **@mobily/ts-belt**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,771,243.00  ops/sec  ±0.95%  (99 runs)  fastest
✔  ramda             2,318,968.59  ops/sec  ±0.31%  (95 runs)  -91.65%
✔  rambda           20,888,631.52  ops/sec  ±0.80%  (96 runs)  -24.78%
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  19,553,087.09  ops/sec  ±0.07%  (101 runs)  fastest
✔  remeda           17,659,061.64  ops/sec  ±1.79%  (98 runs)   -9.69%
✔  ramda             8,440,932.06  ops/sec  ±1.11%  (96 runs)   -56.83%
✔  rambda           16,986,649.62  ops/sec  ±2.27%  (91 runs)   -13.13%
✔  lodash/fp        14,162,403.18  ops/sec  ±1.33%  (99 runs)   -27.57%
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,783,500.95  ops/sec  ±1.84%  (97 runs)   fastest
✔  remeda           12,832,733.95  ops/sec  ±1.32%  (98 runs)   -31.68%
✔  ramda             2,245,365.09  ops/sec  ±0.77%  (102 runs)  -88.05%
✔  rambda           13,151,419.60  ops/sec  ±1.24%  (98 runs)   -29.98%
✔  lodash/fp         2,744,777.90  ops/sec  ±1.17%  (99 runs)   -85.39%
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  5,943,587.16  ops/sec  ±0.48%  (101 runs)  fastest
✔  remeda           1,726,555.66  ops/sec  ±1.10%  (99 runs)   -70.95%
✔  ramda            1,575,724.31  ops/sec  ±1.16%  (95 runs)   -73.49%
✔  rambda           5,727,436.28  ops/sec  ±0.99%  (102 runs)  -3.64%
✔  lodash/fp        2,947,405.55  ops/sec  ±0.88%  (99 runs)   -50.41%
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  5,322,262.23  ops/sec  ±1.03%  (96 runs)   fastest
✔  remeda           1,678,468.40  ops/sec  ±1.15%  (96 runs)   -68.46%
✔  ramda              876,948.72  ops/sec  ±0.63%  (100 runs)  -83.52%
✔  rambda           4,809,030.78  ops/sec  ±1.03%  (97 runs)   -9.64%
✔  lodash/fp          802,093.00  ops/sec  ±1.14%  (100 runs)  -84.93%
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  24,127,179.52  ops/sec  ±0.22%  (99 runs)   fastest
✔  remeda            2,885,822.39  ops/sec  ±2.02%  (98 runs)   -88.04%
✔  ramda            19,727,813.62  ops/sec  ±2.48%  (93 runs)   -18.23%
✔  rambda           20,945,627.40  ops/sec  ±1.69%  (101 runs)  -13.19%
✔  lodash/fp         4,242,255.90  ops/sec  ±1.07%  (100 runs)  -82.42%
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,159,603.13  ops/sec  ±1.54%  (99 runs)   fastest
✔  remeda            2,876,166.73  ops/sec  ±1.60%  (95 runs)   -82.20%
✔  ramda             2,160,280.47  ops/sec  ±0.86%  (101 runs)  -86.63%
✔  rambda           12,679,141.86  ops/sec  ±1.50%  (97 runs)   -21.54%
✔  lodash/fp           950,831.57  ops/sec  ±1.21%  (100 runs)  -94.12%
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  152,863,389.35  ops/sec  ±0.08%  (98 runs)  fastest
✔  remeda             2,940,815.32  ops/sec  ±1.38%  (94 runs)  -98.08%
✔  ramda            150,864,709.36  ops/sec  ±0.07%  (99 runs)  -1.31%
✔  rambda           150,632,414.59  ops/sec  ±0.58%  (94 runs)  -1.46%
✔  lodash/fp          7,214,910.48  ops/sec  ±0.56%  (96 runs)  -95.28%
```

→ Fastest is **@mobily/ts-belt,rambda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  81,748,533.56  ops/sec  ±0.33%  (101 runs)  fastest
✔  remeda            2,370,102.28  ops/sec  ±3.93%  (96 runs)   -97.10%
✔  ramda             2,367,952.05  ops/sec  ±0.57%  (96 runs)   -97.10%
✔  rambda           39,021,711.06  ops/sec  ±0.62%  (94 runs)   -52.27%
✔  lodash/fp           933,931.82  ops/sec  ±1.41%  (98 runs)   -98.86%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  20,023,385.40  ops/sec  ±0.91%  (100 runs)  -12.63%
✔  remeda            2,081,381.00  ops/sec  ±1.46%  (97 runs)   -90.92%
✔  ramda               933,365.34  ops/sec  ±0.86%  (100 runs)  -95.93%
✔  rambda            4,425,561.09  ops/sec  ±0.61%  (100 runs)  -80.69%
✔  lodash/fp        22,917,540.75  ops/sec  ±1.18%  (97 runs)   fastest
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,861,273.98  ops/sec  ±0.93%  (99 runs)   fastest
✔  remeda            2,159,491.96  ops/sec  ±1.17%  (101 runs)  -88.55%
✔  ramda               683,794.59  ops/sec  ±0.36%  (100 runs)  -96.37%
✔  rambda            3,674,797.72  ops/sec  ±0.56%  (98 runs)   -80.52%
✔  lodash/fp         7,779,187.07  ops/sec  ±0.98%  (100 runs)  -58.76%
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  38,260,372.07  ops/sec  ±0.11%  (102 runs)  fastest
✔  remeda           32,640,871.61  ops/sec  ±4.36%  (86 runs)   -14.69%
✔  ramda            10,057,632.51  ops/sec  ±1.22%  (91 runs)   -73.71%
✔  rambda           37,627,166.35  ops/sec  ±2.44%  (93 runs)   -1.65%
✔  lodash/fp        11,846,171.02  ops/sec  ±1.09%  (99 runs)   -69.04%
```

→ Fastest is **@mobily/ts-belt**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  37,246,282.44  ops/sec  ±1.59%  (101 runs)  fastest
✔  remeda           21,731,180.76  ops/sec  ±1.43%  (101 runs)  -41.66%
✔  ramda             2,362,700.45  ops/sec  ±0.59%  (102 runs)  -93.66%
✔  rambda           22,920,781.90  ops/sec  ±1.37%  (96 runs)   -38.46%
✔  lodash/fp         5,593,701.34  ops/sec  ±1.06%  (100 runs)  -84.98%
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  79,746,688.90  ops/sec  ±0.80%  (101 runs)  -1.04%
✔  remeda            2,935,744.73  ops/sec  ±1.39%  (94 runs)   -96.36%
✔  ramda            19,366,034.11  ops/sec  ±0.57%  (94 runs)   -75.97%
✔  rambda           80,583,169.45  ops/sec  ±0.51%  (96 runs)   fastest
✔  lodash/fp        12,519,745.90  ops/sec  ±0.50%  (101 runs)  -84.46%
```

→ Fastest is **rambda**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  46,367,495.33  ops/sec  ±0.55%  (100 runs)  fastest
✔  remeda            2,387,337.87  ops/sec  ±0.91%  (102 runs)  -94.85%
✔  ramda             2,195,618.76  ops/sec  ±0.38%  (100 runs)  -95.26%
✔  rambda           30,847,626.47  ops/sec  ±0.34%  (100 runs)  -33.47%
✔  lodash/fp           791,577.78  ops/sec  ±4.31%  (88 runs)   -98.29%
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  46,693,913.43  ops/sec  ±0.27%  (95 runs)   fastest
✔  remeda            2,528,479.01  ops/sec  ±1.45%  (96 runs)   -94.58%
✔  ramda            16,084,895.72  ops/sec  ±0.97%  (97 runs)   -65.55%
✔  rambda           45,755,473.67  ops/sec  ±1.17%  (100 runs)  -2.01%
✔  lodash/fp         5,811,868.44  ops/sec  ±6.80%  (85 runs)   -87.55%
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,157,852.10  ops/sec  ±1.16%  (97 runs)  fastest
✔  remeda            2,299,836.17  ops/sec  ±1.15%  (99 runs)  -93.06%
✔  ramda             2,102,516.80  ops/sec  ±0.56%  (99 runs)  -93.66%
✔  rambda           23,604,244.02  ops/sec  ±0.87%  (95 runs)  -28.81%
✔  lodash/fp           836,501.85  ops/sec  ±1.39%  (95 runs)  -97.48%
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  144,909,013.55  ops/sec  ±0.13%  (101 runs)  -5.06%
✔  remeda             3,324,461.60  ops/sec  ±0.74%  (100 runs)  -97.82%
✔  ramda             27,978,353.39  ops/sec  ±0.63%  (94 runs)   -81.67%
✔  rambda           152,626,652.74  ops/sec  ±0.06%  (100 runs)  fastest
✔  lodash/fp          8,703,622.86  ops/sec  ±0.46%  (99 runs)   -94.30%
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  73,480,238.33  ops/sec  ±0.45%  (99 runs)   fastest
✔  remeda            2,677,178.59  ops/sec  ±0.91%  (98 runs)   -96.36%
✔  ramda             2,230,298.28  ops/sec  ±0.39%  (98 runs)   -96.96%
✔  rambda           36,874,771.67  ops/sec  ±0.26%  (100 runs)  -49.82%
✔  lodash/fp           852,282.62  ops/sec  ±1.22%  (97 runs)   -98.84%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  25,186,180.15  ops/sec  ±0.20%  (99 runs)   fastest
✔  remeda            2,736,963.68  ops/sec  ±1.80%  (98 runs)   -89.13%
✔  ramda             9,324,199.54  ops/sec  ±1.62%  (93 runs)   -62.98%
✔  rambda           14,639,715.58  ops/sec  ±1.12%  (100 runs)  -41.87%
✔  lodash/fp        10,917,677.01  ops/sec  ±1.02%  (98 runs)   -56.65%
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,613,497.21  ops/sec  ±0.47%  (99 runs)   fastest
✔  remeda            3,438,733.67  ops/sec  ±0.94%  (97 runs)   -82.47%
✔  ramda             1,682,901.94  ops/sec  ±0.76%  (101 runs)  -91.42%
✔  rambda           10,770,461.47  ops/sec  ±1.04%  (96 runs)   -45.09%
✔  lodash/fp           977,539.42  ops/sec  ±1.26%  (97 runs)   -95.02%
```

→ Fastest is **@mobily/ts-belt**
