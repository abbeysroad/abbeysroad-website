#!/usr/bin/env python3
import os
import json
import argparse

def main():
    parser = argparse.ArgumentParser(description="Compile NordisTravel multi-itinerary SPA.")
    parser.add_argument(
        "--itineraries",
        nargs="+",
        help="Paths to JSON itinerary configurations."
    )
    parser.add_argument(
        "--output-dir",
        default=os.path.join(os.path.dirname(__file__), "..", "..", ".."),
        help="Output directory where index.html and app.js will be written."
    )
    args = parser.parse_args()

    output_dir = os.path.abspath(args.output_dir)

    # Default itineraries list if none provided
    itinerary_paths = args.itineraries
    script_dir = os.path.dirname(os.path.abspath(__file__))
    if not itinerary_paths:
        itinerary_paths = [
            os.path.join(script_dir, "..", "examples", "scandinavia_itinerary.json"),
            os.path.join(script_dir, "..", "examples", "classic_scandinavia_itinerary.json")
        ]

    # Resolve paths
    html_template_path = os.path.join(script_dir, "..", "resources", "index.html.template")
    js_template_path = os.path.join(script_dir, "..", "resources", "app.js.template")

    print(f"Loading HTML template from: {html_template_path}")
    with open(html_template_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    print(f"Loading JS template from: {js_template_path}")
    with open(js_template_path, "r", encoding="utf-8") as f:
        js_template = f.read()

    # Load and combine itinerary data
    combined_itineraries = []
    for idx, path in enumerate(itinerary_paths):
        path = os.path.abspath(path)
        print(f"Reading itinerary {idx+1}: {path}")
        with open(path, "r", encoding="utf-8") as f:
            it_data = json.load(f)
            
            # Ensure itinerary has a unique ID and a countries list
            if "id" not in it_data:
                filename = os.path.basename(path)
                it_data["id"] = filename.replace("_itinerary.json", "").replace(".json", "")
            
            if "countries" not in it_data:
                # Fallback heuristics based on details
                it_data["countries"] = []
                # Simple guess
                route_str = it_data.get("essentials", [{}])[1].get("value", "").lower()
                for c in ["denmark", "norway", "sweden", "finland", "iceland"]:
                    if c in route_str:
                        it_data["countries"].append(c.capitalize())
            
            combined_itineraries.append(it_data)

    # Dump itineraries data as JSON
    itineraries_json_str = json.dumps(combined_itineraries, indent=2, ensure_ascii=False)

    # Insert data into Javascript template
    final_js = js_template.replace("{{ITINERARIES_DATA}}", itineraries_json_str)

    # Output Compiled files
    os.makedirs(output_dir, exist_ok=True)
    html_output_path = os.path.join(output_dir, "index.html")
    js_output_path = os.path.join(output_dir, "app.js")

    print(f"Writing compiled index.html to: {html_output_path}")
    with open(html_output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"Writing compiled app.js to: {js_output_path}")
    with open(js_output_path, "w", encoding="utf-8") as f:
        f.write(final_js)

    print("Success! Landing page compiled successfully in SPA mode.")

if __name__ == "__main__":
    main()
