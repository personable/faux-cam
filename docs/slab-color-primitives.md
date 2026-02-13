# Primitive Colors

> **Reference only.** Never use primitive color values directly in components or layouts. Always use [semantic color tokens](./colors-semantic.md) instead.

Primitive colors are the raw palette that semantic tokens reference. They are defined in `slab-tokens/src/tokens/colors/primitive.json`.

---

## Color Scales

Each color (except black, white, and transparent) has steps from **50** (lightest) to **950** (darkest).

### Stone (Neutrals)

Stone is the neutral scale used throughout Slab. All neutral UI (text, borders, surfaces, disabled states) derives from stone.

| Step | Hex |
|------|-----|
| 50 | `#FAFAF9` |
| 100 | `#F6F5F3` |
| 200 | `#E7E6E2` |
| 300 | `#D6D5D2` |
| 400 | `#B5B5B2` |
| 500 | `#747371` |
| 600 | `#57534D` |
| 700 | `#3D3A36` |
| 800 | `#292622` |
| 900 | `#111111` |
| 950 | `#0A0A0A` |

### Blue

| Step | Hex |
|------|-----|
| 50 | `#F3F4FD` |
| 100 | `#E6EAFB` |
| 200 | `#CDD5F7` |
| 300 | `#9CABF0` |
| 400 | `#6A80E8` |
| 500 | `#072CD9` |
| 600 | `#0628C3` |
| 700 | `#0521A3` |
| 800 | `#041877` |
| 900 | `#031257` |
| 950 | `#020B36` |

### Sky

| Step | Hex |
|------|-----|
| 50 | `#F6FBFF` |
| 100 | `#EDF7FF` |
| 200 | `#DBEEFF` |
| 300 | `#B8DDFF` |
| 400 | `#94CDFF` |
| 500 | `#4DABFF` |
| 600 | `#459AE6` |
| 700 | `#3A80BF` |
| 800 | `#2A5E8C` |
| 900 | `#1F4466` |
| 950 | `#132B40` |

### Green

| Step | Hex |
|------|-----|
| 50 | `#F6FDF4` |
| 100 | `#E6F9E1` |
| 200 | `#CCF2C1` |
| 300 | `#A3E396` |
| 400 | `#74CE68` |
| 500 | `#51B845` |
| 600 | `#419638` |
| 700 | `#34762C` |
| 800 | `#2B5C25` |
| 900 | `#1F4520` |
| 950 | `#112613` |

### Red

| Step | Hex |
|------|-----|
| 50 | `#FEF2F4` |
| 100 | `#FEE6EA` |
| 200 | `#FCCCD4` |
| 300 | `#FA99A8` |
| 400 | `#F7667F` |
| 500 | `#F20029` |
| 600 | `#DA0025` |
| 700 | `#B6001F` |
| 800 | `#850017` |
| 900 | `#610010` |
| 950 | `#3C000A` |

### Orange

| Step | Hex |
|------|-----|
| 50 | `#FFF7ED` |
| 100 | `#FFEBD3` |
| 200 | `#FFD39E` |
| 300 | `#FFBA69` |
| 400 | `#FFA035` |
| 500 | `#FF8500` |
| 600 | `#EA580C` |
| 700 | `#AE430B` |
| 800 | `#7E310A` |
| 900 | `#5A2408` |
| 950 | `#441306` |

### Yellow

| Step | Hex |
|------|-----|
| 50 | `#FEFCE8` |
| 100 | `#FDF9D2` |
| 200 | `#FCF2A4` |
| 300 | `#FCEA76` |
| 400 | `#FDDE3C` |
| 500 | `#FFD000` |
| 600 | `#CA8A04` |
| 700 | `#A06305` |
| 800 | `#7F4805` |
| 900 | `#643505` |
| 950 | `#432004` |

### Cyan

| Step | Hex |
|------|-----|
| 50 | `#F3FBFB` |
| 100 | `#E6F9F8` |
| 200 | `#CAF6F3` |
| 300 | `#A3F5EF` |
| 400 | `#3DF5E6` |
| 500 | `#11F3E0` |
| 600 | `#0FC7B8` |
| 700 | `#10988D` |
| 800 | `#0E6C64` |
| 900 | `#0C4A45` |
| 950 | `#092E2B` |

### Pink

| Step | Hex |
|------|-----|
| 50 | `#FEF2FF` |
| 100 | `#FEE6FF` |
| 200 | `#FCCCFF` |
| 300 | `#FA99FF` |
| 400 | `#F766FF` |
| 500 | `#F200FF` |
| 600 | `#DA00E6` |
| 700 | `#B600BF` |
| 800 | `#85008C` |
| 900 | `#610066` |
| 950 | `#3C0040` |

### Slate

| Step | Hex |
|------|-----|
| 50 | `#F8FAFC` |
| 100 | `#F1F5F9` |
| 200 | `#E2E8F0` |
| 300 | `#CAD5E2` |
| 400 | `#90A1B9` |
| 500 | `#62748E` |
| 600 | `#45556C` |
| 700 | `#314158` |
| 800 | `#1D293D` |
| 900 | `#0F172B` |
| 950 | `#020618` |

---

## Special Values

| Name | Value |
|------|-------|
| Black | `#000000` |
| White | `#FFFFFF` |
| Transparent | `rgba(0,0,0,0)` |
