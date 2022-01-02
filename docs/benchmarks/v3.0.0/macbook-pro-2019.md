---
id: macbook-pro-2019
title: MacBook Pro (2019)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| 2,3 GHz 8-Core Intel Core i9 | 64 GB 2667 MHz DDR4 | v14.18.1 | [@foull](https://github.com/foull) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  185,214.97  ops/sec  ±1.03%  (86 runs)  fastest
✔  remeda            16,160.85  ops/sec  ±0.89%  (87 runs)  -91.27%
✔  ramda             92,665.28  ops/sec  ±1.23%  (88 runs)  -49.97%
✔  rambda           171,789.07  ops/sec  ±2.58%  (86 runs)  -7.25%
✔  lodash/fp         44,498.87  ops/sec  ±1.39%  (87 runs)  -75.97%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  1,127,456.96  ops/sec  ±0.71%  (91 runs)  fastest
✔  remeda             264,122.66  ops/sec  ±1.88%  (88 runs)  -76.57%
✔  ramda              146,632.75  ops/sec  ±1.24%  (90 runs)  -86.99%
✔  rambda             902,111.90  ops/sec  ±1.74%  (85 runs)  -19.99%
✔  lodash/fp          216,419.99  ops/sec  ±1.50%  (89 runs)  -80.80%
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  2,437,861.48  ops/sec  ±1.88%  (86 runs)  fastest
✔  remeda             785,890.78  ops/sec  ±1.74%  (85 runs)  -67.76%
✔  ramda            1,679,654.02  ops/sec  ±1.67%  (85 runs)  -31.10%
✔  rambda           1,636,061.46  ops/sec  ±1.01%  (89 runs)  -32.89%
✔  lodash/fp          715,056.45  ops/sec  ±1.09%  (88 runs)  -70.67%
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  2,330,186.03  ops/sec  ±1.24%  (91 runs)  fastest
✔  remeda             651,639.70  ops/sec  ±0.94%  (92 runs)  -72.03%
✔  ramda              546,611.24  ops/sec  ±0.96%  (91 runs)  -76.54%
✔  rambda           1,579,896.03  ops/sec  ±1.46%  (86 runs)  -32.20%
✔  lodash/fp          269,736.81  ops/sec  ±0.49%  (88 runs)  -88.42%
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  29,444,915.40  ops/sec  ±0.52%  (89 runs)  fastest
✔  lodash/fp         1,429,544.31  ops/sec  ±0.96%  (96 runs)  -95.15%
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  21,884,813.53  ops/sec  ±0.73%  (90 runs)  fastest
✔  lodash/fp         1,184,488.54  ops/sec  ±1.97%  (86 runs)  -94.59%
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  18,813,185.49  ops/sec  ±1.16%  (89 runs)  fastest
✔  remeda            1,722,343.03  ops/sec  ±0.99%  (93 runs)  -90.85%
✔  ramda               931,147.62  ops/sec  ±1.57%  (91 runs)  -95.05%
✔  rambda           11,056,100.53  ops/sec  ±1.41%  (94 runs)  -41.23%
✔  lodash/fp        10,464,305.82  ops/sec  ±1.33%  (91 runs)  -44.38%
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,905,450.63  ops/sec  ±0.93%  (90 runs)  fastest
✔  remeda            1,514,106.91  ops/sec  ±1.08%  (92 runs)  -91.99%
✔  ramda               565,693.21  ops/sec  ±0.78%  (92 runs)  -97.01%
✔  rambda            7,994,814.04  ops/sec  ±1.27%  (87 runs)  -57.71%
✔  lodash/fp         3,829,849.88  ops/sec  ±1.59%  (88 runs)  -79.74%
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  29,841,996.82  ops/sec  ±1.25%  (88 runs)  fastest
✔  ramda             7,515,373.51  ops/sec  ±0.93%  (89 runs)  -74.82%
✔  rambda           25,361,467.04  ops/sec  ±1.69%  (91 runs)  -15.01%
✔  lodash/fp         7,217,380.55  ops/sec  ±0.78%  (88 runs)  -75.81%
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,361,087.92  ops/sec  ±1.48%  (94 runs)  fastest
✔  ramda               984,951.53  ops/sec  ±1.16%  (89 runs)  -94.33%
✔  rambda           11,068,526.36  ops/sec  ±1.44%  (92 runs)  -36.25%
✔  lodash/fp           399,055.49  ops/sec  ±1.52%  (88 runs)  -97.70%
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  31,620,494.55  ops/sec  ±0.54%  (90 runs)  fastest
✔  remeda            1,702,768.84  ops/sec  ±1.75%  (88 runs)  -94.61%
✔  ramda             7,894,989.21  ops/sec  ±0.92%  (91 runs)  -75.03%
✔  rambda           27,690,714.15  ops/sec  ±0.93%  (87 runs)  -12.43%
✔  lodash/fp         8,520,806.38  ops/sec  ±1.11%  (91 runs)  -73.05%
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,252,160.68  ops/sec  ±1.53%  (92 runs)  fastest
✔  remeda            1,578,239.66  ops/sec  ±0.95%  (88 runs)  -91.35%
✔  ramda             1,014,091.06  ops/sec  ±1.18%  (93 runs)  -94.44%
✔  rambda           11,531,610.31  ops/sec  ±1.77%  (92 runs)  -36.82%
✔  lodash/fp           363,908.47  ops/sec  ±1.62%  (90 runs)  -98.01%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  11,481,329.77  ops/sec  ±0.86%  (87 runs)  fastest
✔  remeda              739,627.80  ops/sec  ±1.26%  (90 runs)  -93.56%
✔  ramda               410,112.58  ops/sec  ±0.56%  (92 runs)  -96.43%
✔  rambda           10,914,542.93  ops/sec  ±1.50%  (88 runs)  -4.94%
✔  lodash/fp         4,440,467.53  ops/sec  ±0.79%  (93 runs)  -61.32%
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,127,331.38  ops/sec  ±1.23%  (92 runs)  fastest
✔  remeda              606,800.18  ops/sec  ±1.63%  (90 runs)  -94.55%
✔  ramda               324,364.42  ops/sec  ±0.64%  (94 runs)  -97.08%
✔  rambda            8,182,376.51  ops/sec  ±0.68%  (92 runs)  -26.47%
✔  lodash/fp         2,367,542.61  ops/sec  ±1.52%  (90 runs)  -78.72%
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  27,524,003.85  ops/sec  ±0.53%  (91 runs)  fastest
✔  remeda            1,425,826.99  ops/sec  ±1.16%  (91 runs)  -94.82%
✔  ramda             5,351,399.74  ops/sec  ±0.69%  (93 runs)  -80.56%
✔  rambda           10,133,998.14  ops/sec  ±2.11%  (88 runs)  -63.18%
✔  lodash/fp         5,477,505.25  ops/sec  ±0.90%  (92 runs)  -80.10%
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,085,652.37  ops/sec  ±1.62%  (93 runs)  fastest
✔  remeda            1,157,796.06  ops/sec  ±1.59%  (91 runs)  -93.22%
✔  ramda               833,131.35  ops/sec  ±1.03%  (94 runs)  -95.12%
✔  rambda            4,222,501.19  ops/sec  ±1.53%  (92 runs)  -75.29%
✔  lodash/fp           393,715.12  ops/sec  ±1.58%  (89 runs)  -97.70%
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  23,647,447.72  ops/sec  ±0.55%  (93 runs)  fastest
✔  remeda            1,340,592.96  ops/sec  ±0.76%  (94 runs)  -94.33%
✔  ramda             5,402,203.12  ops/sec  ±1.26%  (90 runs)  -77.16%
✔  rambda           22,536,883.73  ops/sec  ±3.16%  (87 runs)  -4.70%
✔  lodash/fp         3,662,844.53  ops/sec  ±1.00%  (86 runs)  -84.51%
```

→ Fastest is **@mobily/ts-belt**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,444,549.57  ops/sec  ±1.76%  (92 runs)  fastest
✔  remeda            1,205,581.58  ops/sec  ±1.62%  (92 runs)  -92.19%
✔  ramda               870,431.32  ops/sec  ±1.15%  (93 runs)  -94.36%
✔  rambda           10,528,691.86  ops/sec  ±1.15%  (95 runs)  -31.83%
✔  lodash/fp           374,746.93  ops/sec  ±1.45%  (88 runs)  -97.57%
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  24,961,389.09  ops/sec  ±0.99%  (87 runs)  -4.13%
✔  ramda            26,036,875.22  ops/sec  ±1.94%  (88 runs)  fastest
✔  rambda           24,011,097.85  ops/sec  ±0.17%  (95 runs)  -7.78%
```

→ Fastest is **ramda**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,443,215.07  ops/sec  ±1.30%  (96 runs)  fastest
✔  ramda             1,087,986.71  ops/sec  ±1.18%  (91 runs)  -92.95%
✔  rambda           10,584,361.59  ops/sec  ±1.85%  (89 runs)  -31.46%
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  9,691,668.71  ops/sec  ±0.15%  (92 runs)  fastest
✔  remeda           8,657,446.12  ops/sec  ±0.69%  (94 runs)  -10.67%
✔  ramda            4,141,590.28  ops/sec  ±0.46%  (97 runs)  -57.27%
✔  rambda           8,585,270.78  ops/sec  ±0.57%  (97 runs)  -11.42%
✔  lodash/fp        7,783,680.45  ops/sec  ±1.43%  (93 runs)  -19.69%
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  10,095,937.81  ops/sec  ±0.85%  (94 runs)  fastest
✔  remeda            7,244,838.16  ops/sec  ±0.61%  (93 runs)  -28.24%
✔  ramda             1,164,397.09  ops/sec  ±1.06%  (92 runs)  -88.47%
✔  rambda            7,225,334.83  ops/sec  ±1.11%  (92 runs)  -28.43%
✔  lodash/fp         1,529,030.84  ops/sec  ±0.60%  (93 runs)  -84.85%
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  3,210,005.43  ops/sec  ±0.70%  (89 runs)  -6.48%
✔  remeda             894,429.79  ops/sec  ±1.71%  (92 runs)  -73.94%
✔  ramda              831,245.94  ops/sec  ±1.08%  (93 runs)  -75.78%
✔  rambda           3,432,249.45  ops/sec  ±1.88%  (92 runs)  fastest
✔  lodash/fp        1,622,411.67  ops/sec  ±0.70%  (86 runs)  -52.73%
```

→ Fastest is **rambda**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  2,880,958.29  ops/sec  ±1.82%  (86 runs)  fastest
✔  remeda             894,038.22  ops/sec  ±0.45%  (96 runs)  -68.97%
✔  ramda              509,048.81  ops/sec  ±0.45%  (96 runs)  -82.33%
✔  rambda           2,853,523.41  ops/sec  ±1.83%  (88 runs)  -0.95%
✔  lodash/fp          331,944.54  ops/sec  ±1.77%  (93 runs)  -88.48%
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  12,154,934.40  ops/sec  ±0.92%  (87 runs)  fastest
✔  remeda            1,598,037.95  ops/sec  ±1.65%  (89 runs)  -86.85%
✔  ramda            10,014,586.03  ops/sec  ±2.10%  (86 runs)  -17.61%
✔  rambda           10,139,255.11  ops/sec  ±2.26%  (87 runs)  -16.58%
✔  lodash/fp         3,103,317.95  ops/sec  ±0.52%  (94 runs)  -74.47%
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  9,080,073.64  ops/sec  ±2.12%  (89 runs)  fastest
✔  remeda           1,554,766.71  ops/sec  ±2.40%  (92 runs)  -82.88%
✔  ramda            1,124,564.36  ops/sec  ±1.42%  (95 runs)  -87.62%
✔  rambda           6,543,972.82  ops/sec  ±1.74%  (91 runs)  -27.93%
✔  lodash/fp          478,876.82  ops/sec  ±1.57%  (94 runs)  -94.73%
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  104,464,837.63  ops/sec  ±0.38%  (86 runs)  -21.85%
✔  remeda             1,534,119.70  ops/sec  ±0.77%  (91 runs)  -98.85%
✔  ramda            133,679,905.81  ops/sec  ±1.15%  (90 runs)  fastest
✔  rambda           115,434,895.67  ops/sec  ±0.52%  (92 runs)  -13.65%
✔  lodash/fp          9,068,171.73  ops/sec  ±0.70%  (93 runs)  -93.22%
```

→ Fastest is **ramda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  46,652,380.93  ops/sec  ±0.51%  (92 runs)  fastest
✔  remeda            1,367,850.39  ops/sec  ±1.44%  (94 runs)  -97.07%
✔  ramda             1,261,479.50  ops/sec  ±1.32%  (92 runs)  -97.30%
✔  rambda           18,346,015.35  ops/sec  ±0.38%  (95 runs)  -60.68%
✔  lodash/fp           437,512.11  ops/sec  ±0.82%  (91 runs)  -99.06%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  11,293,548.68  ops/sec  ±1.51%  (87 runs)  -34.93%
✔  remeda            1,178,868.25  ops/sec  ±1.60%  (91 runs)  -93.21%
✔  ramda               523,459.04  ops/sec  ±0.77%  (90 runs)  -96.98%
✔  rambda            2,736,960.52  ops/sec  ±1.55%  (88 runs)  -84.23%
✔  lodash/fp        17,355,035.74  ops/sec  ±0.52%  (91 runs)  fastest
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  8,276,795.65  ops/sec  ±1.23%  (82 runs)  fastest
✔  remeda           1,193,395.74  ops/sec  ±0.82%  (91 runs)  -85.58%
✔  ramda              391,153.26  ops/sec  ±0.79%  (95 runs)  -95.27%
✔  rambda           2,353,530.56  ops/sec  ±1.00%  (94 runs)  -71.56%
✔  lodash/fp        4,261,301.38  ops/sec  ±1.39%  (95 runs)  -48.52%
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  19,569,203.07  ops/sec  ±0.87%  (90 runs)  -0.90%
✔  remeda           18,621,601.70  ops/sec  ±3.29%  (87 runs)  -4.84%
✔  ramda             5,025,124.64  ops/sec  ±1.71%  (93 runs)  -74.32%
✔  rambda           19,744,368.01  ops/sec  ±1.94%  (96 runs)  fastest
✔  lodash/fp         7,919,229.12  ops/sec  ±0.34%  (92 runs)  -59.53%
```

→ Fastest is **rambda**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,079,911.51  ops/sec  ±0.51%  (96 runs)  fastest
✔  remeda           11,006,486.03  ops/sec  ±0.74%  (92 runs)  -42.31%
✔  ramda             1,062,883.48  ops/sec  ±1.64%  (91 runs)  -94.43%
✔  rambda           11,449,602.88  ops/sec  ±1.85%  (97 runs)  -39.99%
✔  lodash/fp         2,940,824.50  ops/sec  ±1.41%  (97 runs)  -84.59%
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  46,208,742.57  ops/sec  ±0.87%  (91 runs)  fastest
✔  remeda            1,483,350.48  ops/sec  ±0.72%  (96 runs)  -96.79%
✔  ramda            11,670,389.46  ops/sec  ±0.90%  (94 runs)  -74.74%
✔  rambda           41,576,739.27  ops/sec  ±0.58%  (94 runs)  -10.02%
✔  lodash/fp         7,875,581.31  ops/sec  ±0.49%  (93 runs)  -82.96%
```

→ Fastest is **@mobily/ts-belt**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  24,320,434.44  ops/sec  ±0.22%  (91 runs)  fastest
✔  remeda            1,225,599.80  ops/sec  ±2.05%  (95 runs)  -94.96%
✔  ramda             1,042,907.35  ops/sec  ±0.80%  (96 runs)  -95.71%
✔  rambda           13,272,913.88  ops/sec  ±1.06%  (92 runs)  -45.42%
✔  lodash/fp           410,550.21  ops/sec  ±1.41%  (91 runs)  -98.31%
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  30,695,201.46  ops/sec  ±0.36%  (93 runs)  fastest
✔  remeda            1,308,072.29  ops/sec  ±0.75%  (95 runs)  -95.74%
✔  ramda            10,174,007.67  ops/sec  ±1.29%  (92 runs)  -66.85%
✔  rambda           29,885,080.73  ops/sec  ±1.86%  (93 runs)  -2.64%
✔  lodash/fp         7,109,821.53  ops/sec  ±1.32%  (91 runs)  -76.84%
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,337,667.02  ops/sec  ±1.51%  (93 runs)  fastest
✔  remeda            1,295,429.49  ops/sec  ±0.80%  (91 runs)  -92.94%
✔  ramda             1,087,394.11  ops/sec  ±1.30%  (90 runs)  -94.07%
✔  rambda           11,967,145.42  ops/sec  ±0.20%  (94 runs)  -34.74%
✔  lodash/fp           415,480.96  ops/sec  ±1.65%  (90 runs)  -97.73%
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt   89,641,558.44  ops/sec  ±0.87%  (92 runs)  -29.47%
✔  remeda             1,708,334.09  ops/sec  ±0.58%  (90 runs)  -98.66%
✔  ramda             17,346,968.87  ops/sec  ±0.48%  (95 runs)  -86.35%
✔  rambda           127,095,258.50  ops/sec  ±1.32%  (90 runs)  fastest
✔  lodash/fp          5,502,398.86  ops/sec  ±0.62%  (87 runs)  -95.67%
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,470,286.46  ops/sec  ±0.35%  (92 runs)  fastest
✔  remeda            1,446,624.04  ops/sec  ±1.83%  (89 runs)  -95.68%
✔  ramda             1,143,589.43  ops/sec  ±1.25%  (93 runs)  -96.58%
✔  rambda           17,083,487.01  ops/sec  ±0.25%  (96 runs)  -48.96%
✔  lodash/fp           406,488.45  ops/sec  ±1.45%  (91 runs)  -98.79%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  16,169,339.56  ops/sec  ±0.58%  (89 runs)  fastest
✔  remeda            1,461,142.29  ops/sec  ±1.31%  (92 runs)  -90.96%
✔  ramda             2,917,125.81  ops/sec  ±1.40%  (94 runs)  -81.96%
✔  rambda            9,125,733.89  ops/sec  ±1.92%  (89 runs)  -43.56%
✔  lodash/fp         6,134,925.66  ops/sec  ±1.79%  (89 runs)  -62.06%
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,363,139.60  ops/sec  ±1.75%  (94 runs)  fastest
✔  remeda            1,735,905.14  ops/sec  ±1.50%  (92 runs)  -84.72%
✔  ramda               759,618.29  ops/sec  ±0.21%  (92 runs)  -93.32%
✔  rambda            5,769,486.28  ops/sec  ±0.58%  (90 runs)  -49.23%
✔  lodash/fp           401,174.60  ops/sec  ±0.90%  (88 runs)  -96.47%
```

→ Fastest is **@mobily/ts-belt**
