import csv
import os
import re

CSV_PATH = 'd:/FSW/PROJECT COBA/fazallsaid.github.io/files/list_tampilan.csv'
BASE_TEMPLATE_DIR = 'd:/FSW/PROJECT COBA/fazallsaid.github.io/templates'

def normalize(name):
    """Normalize string for use in file paths."""
    
    # Custom mappings
    custom_map = {
        'f&b': 'food',
        'education & organization': 'edu',
        'corporate & professional': 'corporate',
        'health & beauty': 'health'
    }
    
    if name.lower() in custom_map:
        return custom_map[name.lower()]

    name = name.lower()
    name = name.replace('&', ' ')
    name = name.replace(' and ', ' ')
    name = name.replace('/', ' ') # Replace slash with space first for subcategories like "Construction / Kontraktor"
    name = re.sub(r'[^a-z0-9\s-]', '', name) # Remove special chars except spaces and hyphens
    name = re.sub(r'\s+', '-', name.strip()) # Replace spaces with hyphens
    return name

def main():
    print(f"Reading CSV from: {CSV_PATH}")
    
    if not os.path.exists(CSV_PATH):
        print(f"Error: CSV file not found at {CSV_PATH}")
        return

    count = 0
    with open(CSV_PATH, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            category_raw = row['Kategori Web']
            subcategory_raw = row['Sub Kategori Web']
            webname_raw = row['Nama Web']
            
            category_slug = normalize(category_raw)
            subcategory_slug = normalize(subcategory_raw)
            webname_slug = normalize(webname_raw)
            
            # Construct path
            # Strategy: templates/category/subcategory/webname
            target_dir = os.path.join(BASE_TEMPLATE_DIR, category_slug, subcategory_slug, webname_slug)
            
            # Create directory
            os.makedirs(target_dir, exist_ok=True)
            
            # Create README.md as placeholder
            readme_path = os.path.join(target_dir, 'README.md')
            with open(readme_path, 'w', encoding='utf-8') as rm:
                rm.write(f"# {webname_raw}\n")
                rm.write(f"**Category:** {category_raw}\n")
                rm.write(f"**Sub Category:** {subcategory_raw}\n")
                rm.write(f"\nThis is a placeholder for the {webname_raw} template.\n")
            
            # Create empty index.html for easier navigation later
            index_path = os.path.join(target_dir, 'index.html')
            if not os.path.exists(index_path):
                 with open(index_path, 'w', encoding='utf-8') as idx:
                    idx.write(f"<!DOCTYPE html>\n<html><head><title>{webname_raw}</title></head><body><h1>Work in Progress: {webname_raw}</h1></body></html>")

            print(f"Created: {target_dir}")
            count += 1
            
    print(f"Total directories processing complete: {count} templates.")

if __name__ == "__main__":
    main()
