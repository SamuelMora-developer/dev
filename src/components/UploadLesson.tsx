
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { FileUp } from 'lucide-react';

const UploadLesson = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courseId, setCourseId] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [resourceFiles, setResourceFiles] = useState<FileList | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    // This is where you would normally upload the files to a server
    // For now, we'll just simulate a successful upload after a delay
    setTimeout(() => {
      console.log('Lesson uploaded:', {
        title,
        description,
        courseId,
        videoFile: videoFile?.name,
        resourceFiles: resourceFiles ? Array.from(resourceFiles).map(f => f.name) : []
      });

      toast({
        title: "Lesson Uploaded Successfully!",
        description: "Your lesson has been uploaded and is now processing.",
      });

      // Reset form
      setTitle('');
      setDescription('');
      setCourseId('');
      setVideoFile(null);
      setResourceFiles(null);
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hustler-black">Upload New Lesson</h2>
          <p className="mt-4 text-xl text-hustler-darkgray">
            Add new content to your courses by uploading lessons and resources.
          </p>
        </div>

        <Card className="border border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Lesson Title
                </label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter the lesson title"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Lesson Description
                </label>
                <Textarea 
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Enter a detailed description of the lesson"
                  className="w-full"
                  rows={4}
                />
              </div>

              <div>
                <label htmlFor="courseId" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Course
                </label>
                <select
                  id="courseId"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-hustler-gold focus:border-hustler-gold"
                >
                  <option value="">Select a course</option>
                  <option value="digitalMarketing">Digital Marketing Mastery</option>
                  <option value="ecommerce">E-commerce Empire Building</option>
                  <option value="personalBrand">Personal Brand Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="video" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Video Lesson
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
                  <div className="space-y-1 text-center">
                    <FileUp className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="video" className="relative cursor-pointer bg-white rounded-md font-medium text-hustler-gold hover:text-yellow-500 focus-within:outline-none">
                        <span>Upload a video file</span>
                        <Input 
                          id="video" 
                          type="file" 
                          accept="video/*"
                          onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                          className="sr-only" 
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      MP4, MOV or WebM up to 2GB
                    </p>
                  </div>
                </div>
                {videoFile && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected: {videoFile.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="resources" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Additional Resources (Optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
                  <div className="space-y-1 text-center">
                    <FileUp className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="resources" className="relative cursor-pointer bg-white rounded-md font-medium text-hustler-gold hover:text-yellow-500 focus-within:outline-none">
                        <span>Upload resources</span>
                        <Input 
                          id="resources" 
                          type="file"
                          multiple
                          onChange={(e) => setResourceFiles(e.target.files)}
                          className="sr-only" 
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOCX, XLSX up to 10 files
                    </p>
                  </div>
                </div>
                {resourceFiles && resourceFiles.length > 0 && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected: {resourceFiles.length} file{resourceFiles.length !== 1 ? 's' : ''}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-hustler-gold hover:bg-yellow-500 text-hustler-black"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload Lesson'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadLesson;
