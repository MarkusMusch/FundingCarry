export interface ChartData {
    date: string;
    Apples: number;
    Oranges: number;
}

export interface Series {
    name: string;
    color: string;
}

export interface ApiResponse {
    data: ChartData[];
    dataKey: string;
    series: Series[];
}