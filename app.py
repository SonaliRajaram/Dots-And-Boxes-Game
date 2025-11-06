from flask import Flask, render_template, send_from_directory
import os

# Get the base path of the current directory (DOTSANDBOXESGAME)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Define the path to the Flutter 'assets' folder
ASSETS_DIR = os.path.join(BASE_DIR, 'dots_and_boxes_app', 'assets')

# Initialize the Flask application
# We use the ASSETS_DIR for both the template and static files.
app = Flask(
    __name__, 
    template_folder=ASSETS_DIR, 
    static_folder=ASSETS_DIR # This makes CSS/JS available at /static/style.css
)

@app.route('/')
def home():
    """
    Renders the index.html file found in the ASSETS_DIR.
    """
    # The 'index.html' file should still use relative paths for resources
    return render_template('index.html')

@app.route('/<filename>')
def serve_asset(filename):
    """
    Serves static files (CSS/JS) directly from the assets directory 
    if they are referenced by their filename in index.html.
    """
    return send_from_directory(ASSETS_DIR, filename)


if __name__ == '__main__':
    app.run(debug=True)