# Dots and Boxes Game

A cross-platform implementation of the classic Dots and Boxes game using Flutter and Flask. The application combines a Flutter frontend with a Flask backend server to deliver an interactive gaming experience.

## Project Structure

```
├── app.py                 # Flask backend server
└── dots_and_boxes_app/    # Flutter frontend application
    ├── assets/           # Game assets and web resources
    ├── lib/             # Flutter application code
    ├── test/            # Test files
    └── pubspec.yaml     # Flutter dependencies
```

## Prerequisites

- Python 3.9+
- Flutter SDK ^3.9.2
- Flask

## Dependencies

### Flutter Dependencies
- Flutter SDK
- webview_flutter: ^4.2.1
- cupertino_icons: ^1.0.8

### Python Dependencies
- Flask

## Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd DotsAndBoxesGame
```

2. Install Python dependencies:
```bash
pip install flask
```

3. Install Flutter dependencies:
```bash
cd dots_and_boxes_app
flutter pub get
```

## Running the Application

### Start the Flask Backend
```bash
python app.py
```
The server will start on `http://localhost:5000`

### Run the Flutter Application
```bash
cd dots_and_boxes_app
flutter run
```

## Development

The application uses:
- Flutter for the cross-platform frontend
- Flask for serving static assets and handling backend logic
- WebView for displaying web content within the Flutter app

## Building for Different Platforms

### Android
```bash
flutter build apk
```

### iOS
```bash
flutter build ios
```

### Web
```bash
flutter build web
```

### Desktop (Windows/Linux/macOS)
```bash
flutter build windows
flutter build linux
flutter build macos
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Resources

For help getting started with Flutter development:
- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)
- [Online documentation](https://docs.flutter.dev/)

For Flask documentation:
- [Flask Documentation](https://flask.palletsprojects.com/)
```
