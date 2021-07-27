export class Widget {
  constructor(public widgetData: any) {}
}

export class Column {
  constructor(public data: Widget | Layout, public size: number) {}
}

export class Row {
  constructor(public columns: Column[]) {}
}

export class Layout {
  constructor(public rows: Row[]) {}
}
