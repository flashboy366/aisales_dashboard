from typing import Union
from fastapi import FastAPI
import pandas as pd
import json
from util import get_timestamp_from_date_string
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/sales")
def get_sales():

    sales_url = f"https://docs.google.com/spreadsheets/d/1PpMY5_Z7j25eGMCnAlZiajqRWmzKWmIyJYi4_5OlZAg/gviz/tq?tqx=out:csv&sheet=%D0%9F%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8%22"
    losses_url = f"https://docs.google.com/spreadsheets/d/1PpMY5_Z7j25eGMCnAlZiajqRWmzKWmIyJYi4_5OlZAg/gviz/tq?tqx=out:csv&sheet=%D0%9F%D0%BE%D1%82%D0%B5%D1%80%D0%B8"
    skills_url = f"https://docs.google.com/spreadsheets/d/1PpMY5_Z7j25eGMCnAlZiajqRWmzKWmIyJYi4_5OlZAg/gviz/tq?tqx=out:csv&sheet=%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8"

    sales_table = pd.read_csv(sales_url)
    losses_table = pd.read_csv(losses_url)
    skills_table = pd.read_csv(skills_url)

    skills_table = skills_table.drop(skills_table.iloc[:, 3:27], axis = 1)

    final_table = pd.concat([
        sales_table,
        losses_table['Потери, шт'],
        skills_table['Навыки, %']
    ], axis=1)

    final_table = final_table.rename(columns={
        'Дата продажи': 'date',
        'Менеджер': 'manager',
        'Сумма продаж': 'sales_sum',
        'Потери, шт': 'losses',
        'Навыки, %': 'skills',
    })

    final_table['date'] = final_table['date'].apply(get_timestamp_from_date_string)

    final_dict = final_table.to_dict(orient='records')

    return final_dict
