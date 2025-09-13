import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  type: string;
}

const DocumentUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const processFile = (file: File) => {
    const fileId = Math.random().toString(36).substr(2, 9);
    const newFile: UploadedFile = {
      id: fileId,
      name: file.name,
      size: file.size,
      status: 'uploading',
      progress: 0,
      type: file.type
    };

    setFiles(prev => [...prev, newFile]);

    // Simulate upload and processing
    let progress = 0;
    const uploadInterval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(uploadInterval);
        
        setFiles(prev => prev.map(f => 
          f.id === fileId 
            ? { ...f, status: 'processing', progress: 100 }
            : f
        ));
        
        // Simulate processing
        setTimeout(() => {
          setFiles(prev => prev.map(f => 
            f.id === fileId 
              ? { ...f, status: 'completed' }
              : f
          ));
          
          toast({
            title: "Document Processed",
            description: `${file.name} has been successfully analyzed and is ready for study.`,
          });
        }, 2000);
      } else {
        setFiles(prev => prev.map(f => 
          f.id === fileId 
            ? { ...f, progress }
            : f
        ));
      }
    }, 500);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(processFile);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(processFile);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusIcon = (status: UploadedFile['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <FileText className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Upload Your Study Materials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drop your documents, PDFs, notes, and materials. Our AI will process them and create personalized study plans.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Upload Area */}
          <Card 
            className={`border-2 border-dashed p-12 text-center transition-all duration-300 ${
              isDragOver 
                ? 'border-accent bg-accent/5 shadow-glow' 
                : 'border-border hover:border-accent/50 hover:bg-accent/5'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow">
                <Upload className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Drop files here or click to browse</h3>
                <p className="text-muted-foreground">
                  Supports PDF, DOCX, TXT, and more. Maximum file size: 10MB
                </p>
              </div>
              
              <div>
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.docx,.doc,.txt,.md"
                />
                <label htmlFor="file-upload">
                  <Button variant="outline" className="cursor-pointer">
                    Select Files
                  </Button>
                </label>
              </div>
            </div>
          </Card>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Processing Files</h3>
              {files.map((file) => (
                <Card key={file.id} className="p-4 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(file.status)}
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{file.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                      
                      {file.status !== 'completed' && (
                        <Progress value={file.progress} className="h-2" />
                      )}
                      
                      <div className="text-sm text-muted-foreground">
                        {file.status === 'uploading' && 'Uploading...'}
                        {file.status === 'processing' && 'Processing with AI...'}
                        {file.status === 'completed' && 'Ready for study'}
                        {file.status === 'error' && 'Failed to process'}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;