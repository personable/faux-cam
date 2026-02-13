# Table

The `Table` component renders a sortable, paginated data table powered by [TanStack React Table](https://tanstack.com/table). It handles column sizing via CSS grid, optional sticky headers, and both client-side and server-side sorting and pagination. Import from `@companycam/slab-web`.

---

## When to Use

- **Tabular data** -- displaying structured records with multiple columns (users, projects, transactions).
- **Sortable lists** -- any dataset where users need to reorder by column values.
- **Paginated datasets** -- large collections that should be split across pages.

Do **not** use Table for simple key-value displays (use a description list or Card), single-column lists (use a styled list), or layout grids (use CSS grid directly).

---

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `defaultData` | `T[]` | -- | **Yes** | Array of row objects. The generic type `T` defines the shape of each row. |
| `columns` | `ColumnDef[]` | -- | **Yes** | Column definitions from `@tanstack/react-table`. Each column specifies an `accessorKey` (or `accessorFn`), `header`, and optional `cell` renderer. |
| `columnSizes` | `FilteredCellSize[]` | -- | **Yes** | Array matching the number of columns. Each entry controls that column's width (see Column Sizing below). |
| `ccMargin` | `string` | `undefined` | No | External spacing using Slab spacing tokens (e.g. `"0 m xl"`). See [Spacing & Layout](../patterns/spacing-layout.md). |
| `defaultSortedColumns` | `{ id: string; desc: boolean }[]` | `undefined` | No | Initial sort state applied on mount. |
| `enableSortingRemoval` | `boolean` | `false` | No | When `true`, a third click on a column header returns it to unsorted. When `false`, sorting cycles between ascending and descending only. |
| `enableStickyHeaders` | `boolean` | `false` | No | Sticks the header row to the top of the viewport when the page scrolls. |
| `sorting` | `SortingState` | `undefined` | No | Controlled sorting state. When provided, the table does not sort data internally. |
| `onSortingChange` | `(newSorting: SortingState) => void` | `undefined` | No | Callback fired when the user changes sort order. Required when using controlled sorting. |
| `manualPagination` | `boolean` | `false` | No | When `true`, disables client-side pagination. You must pre-paginate `defaultData` yourself. |
| `pageCount` | `number` | `undefined` | No | Total number of pages for server-side pagination. Pass `-1` if unknown. |

All standard `<table>` HTML attributes are also accepted via rest props.

---

## Exported Types

Table re-exports the following types from `@tanstack/react-table` for convenience:

```tsx
import {
  Table,
  CellContext,
  ColumnDef,
  ColumnSort,
  OnChangeFn,
  Row,
  SortingState,
} from '@companycam/slab-web';
```

---

## Column Sizing

The `columnSizes` array controls the CSS grid column widths. It must have the same number of entries as `columns`.

| Value | CSS Output | Use Case |
|-------|-----------|----------|
| `number` (e.g. `200`) | `200px` | Fixed-width column |
| `'fill'` | `minmax(100px, 1fr)` | Flexible column that fills remaining space |
| CSS string (e.g. `'minmax(200px, 1fr)'`) | Used as-is | Custom responsive behavior |

```tsx
// 4 columns: fixed 80px, flexible fill, flexible fill, fixed 120px
columnSizes={[80, 'fill', 'fill', 120]}
```

---

## Column Definitions

Define columns using the `ColumnDef` type. Each column needs at minimum an `accessorKey` and `header`.

```tsx
import { ColumnDef } from '@companycam/slab-web';

type User = { id: number; full_name: string; age: number; city: string };

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'full_name',
    header: 'Name',
    enableSorting: true,
  },
  {
    accessorKey: 'age',
    header: 'Age',
    enableSorting: true,
  },
  {
    accessorKey: 'city',
    header: 'City',
    enableSorting: true,
  },
];
```

To disable sorting on a specific column, set `enableSorting: false` or omit the property (defaults to sortable when the table has sorting enabled).

To customize cell rendering, provide a `cell` function:

```tsx
{
  accessorKey: 'age',
  header: 'Age',
  cell: (info) => `${info.getValue()} years`,
}
```

---

## Sorting

### Client-Side (Default)

The table sorts data internally. Clicking a column header cycles through descending, ascending, and optionally unsorted states.

```tsx
<Table
  defaultData={users}
  columns={columns}
  columnSizes={['fill', 100, 'fill']}
  defaultSortedColumns={[{ id: 'full_name', desc: false }]}
  enableSortingRemoval={true}
/>
```

### Server-Side (Controlled)

Pass `sorting` and `onSortingChange` to manage sort state externally. The table renders sort indicators but does not reorder data.

```tsx
const [sorting, setSorting] = useState<SortingState>([]);

<Table
  defaultData={users}
  columns={columns}
  columnSizes={['fill', 100, 'fill']}
  sorting={sorting}
  onSortingChange={setSorting}
/>
```

### Sort Button

Sortable column headers automatically render a `TableColumnSortButton` with visual indicators:

| State | Icon |
|-------|------|
| Unsorted | `swap-vertical` (subtle color) |
| Ascending | `arrow-up-thin` |
| Descending | `arrow-down-thin` |

---

## Pagination

Client-side pagination is enabled by default with 10 rows per page (React Table default).

For server-side pagination, set `manualPagination={true}` and pass pre-paginated data:

```tsx
<Table
  defaultData={currentPageData}
  columns={columns}
  columnSizes={['fill', 100, 'fill']}
  manualPagination={true}
  pageCount={totalPages}
/>
```

---

## Overflow

When the table content exceeds the available width, horizontal scrolling is enabled automatically. The table sets `overflow-x: auto` and `white-space: nowrap` on the root element.

To demonstrate overflow behavior in a constrained container:

```tsx
<div style={{ maxWidth: 400 }}>
  <Table
    defaultData={users}
    columns={columns}
    columnSizes={['fill', 'fill', 'fill', 'fill']}
  />
</div>
```

---

## Usage Examples

### Correct

```tsx
import { Table, ColumnDef } from '@companycam/slab-web';

type Project = { id: number; name: string; status: string; updated: string };

const columns: ColumnDef[] = [
  { accessorKey: 'name', header: 'Project Name', enableSorting: true },
  { accessorKey: 'status', header: 'Status', enableSorting: true },
  { accessorKey: 'updated', header: 'Last Updated', enableSorting: true },
];
```

### Incorrect

```tsx
// Missing columnSizes (required)

// columnSizes length doesn't match columns length

// Using controlled sorting without onSortingChange
```

---

## Accessibility Notes

1. **Semantic HTML.** Table renders proper `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements.
2. **Column headers.** Each `<th>` uses `scope="col"` to associate header cells with their data columns.
3. **Sort state announcement.** Sortable column headers include `aria-sort` with values `"ascending"`, `"descending"`, or `"none"`.
4. **Sort buttons.** Sort controls are rendered as `<button>` elements, making them keyboard accessible.
5. **Focus styles.** Sort buttons display an outline using `--cc_color_border_input_active` on focus.
6. **Row hover.** Rows show a subtle background change on hover (`--cc_color_background_2`) for visual feedback.
