from pydantic import BaseModel

class ChartData(BaseModel):
    data: list[dict[str, str | int]]
    dataKey: str 
    series: list[dict[str, str]]