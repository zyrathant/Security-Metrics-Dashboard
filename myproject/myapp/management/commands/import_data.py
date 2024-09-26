
import json
from myapp.models import CSVData, JSONData
from django.core.management.base import BaseCommand
import pandas as pd

class Command(BaseCommand):
    help = 'Import data from CSV and JSON files into the database'

    def handle(self, *args, **kwargs):
        self.import_csv_data('myapp/data/cybersecurity_attacks.csv')

        self.import_json_data('myapp/data/cybersecurity.json')

        self.stdout.write(self.style.SUCCESS('Data imported successfully!'))


    def import_csv_data(self, file_path):
        df = pd.read_csv(file_path)
        for _, row in df.iterrows():
            CSVData.objects.create(column1=row['Malware Indicators'], column2=row['Attack Type'],
                                   column3=row['Attack Signature'],column4=row['Action Taken'],column5=row['Severity Level'],
                                    column6=row['Device information'], column7=row['Geo-location Data'])

    def import_json_data(self, file_path):
        with open(file_path) as json_file:
            data = json.load(json_file)
            for item in data:
                JSONData.objects.create(
                    key=item['key'],
                    value= item['value']
                )