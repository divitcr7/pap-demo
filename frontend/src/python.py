
import os

def create_files(path, start_num=7, end_num=16):
    try:
        # Check if the specified path exists
        if not os.path.exists(path):
            print(f"The path '{path}' does not exist.")
            return
        
        # Loop to create files from WebPage7 to WebPage16
        for i in range(start_num, end_num + 1):
            file_name = f"WebPage{i}.tsx"
            file_path = os.path.join(path, file_name)
            with open(file_path, 'w') as file:
                file.write(f"This is {file_name}\n")  # Sample content for the file
            print(f"Created file: {file_path}")

        print("All files created successfully.")
    
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
create_files("/Users/adityagoel/Desktop/Coding/Divit/src/components")  # Replace with your desired path
