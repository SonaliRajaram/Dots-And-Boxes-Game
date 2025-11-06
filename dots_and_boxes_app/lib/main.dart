import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const DotsAndBoxesApp());
}

class DotsAndBoxesApp extends StatefulWidget {
  const DotsAndBoxesApp({super.key});

  @override
  State<DotsAndBoxesApp> createState() => _DotsAndBoxesAppState();
}

class _DotsAndBoxesAppState extends State<DotsAndBoxesApp> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();

    // Create a controller for the WebView
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted);

    _controller.loadFlutterAsset('assets/index.html');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Dots and Boxes',
      home: Scaffold(
        appBar: AppBar(title: const Text('Dots and Boxes')),
        body: SafeArea(
          child: WebViewWidget(controller: _controller),
        ),
      ),
    );
  }
}