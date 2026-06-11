# AI-Powered Report Generator

An intelligent system that converts DOCX, PDF, and Images into perfectly formatted JRXML reports using AI analysis.

## Architecture

```
DOCX / PDF / Image Upload
        ↓
AI Analyze Design
        ↓
Generate JRXML
        ↓
Compile Jasper
        ↓
100% Accurate Report
```

## Features

✅ Multiple file format support (PDF, DOCX, Images)
✅ AI-powered design analysis
✅ Automatic JRXML generation
✅ Jasper report compilation
✅ Multiple export formats (PDF, HTML)
✅ Real-time preview
✅ Drag-and-drop layout editor
✅ RESTful API
✅ Docker containerization

## Quick Start

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.0+
- Maven 3.8+

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Setup
```bash
cd frontend
npm install
ng serve
```

Visit `http://localhost:4200` in your browser.

## API Endpoints

- `POST /api/upload/document` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files
- `DELETE /api/upload/{fileId}` - Delete file
- `POST /api/report/analyze?fileId={id}` - Analyze design with AI
- `POST /api/report/generate-jrxml` - Generate JRXML
- `POST /api/report/compile?reportId={id}` - Compile report
- `GET /api/report/preview/{reportId}` - Get report preview
- `POST /api/report/export` - Export report

## Technologies Used

### Backend
- Spring Boot 3.2
- Java 17
- Apache POI (DOCX parsing)
- PDFBox (PDF parsing)
- Tesseract (OCR)
- JimuReport/Jasper (Report generation)
- MySQL 8.0

### Frontend
- Angular 16+
- TypeScript 5.1
- Bootstrap 5
- RxJS 7.8

## Docker Deployment

```bash
docker-compose up -d
```

## Environment Variables

```
GEMINI_API_KEY=your-api-key
OPENAI_API_KEY=your-api-key
CLAUDE_API_KEY=your-api-key
```

## License

MIT
