@RestController
public class VideoUploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> handleVideoUpload(@RequestParam("video") MultipartFile file) {
        try {
            File savedFile = new File("uploads/" + file.getOriginalFilename());
            savedFile.getParentFile().mkdirs(); // Create folder if not exists
            file.transferTo(savedFile);
            return ResponseEntity.ok("Video uploaded successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Upload failed.");
        }
    }
}