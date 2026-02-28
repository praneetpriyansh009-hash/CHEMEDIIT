import os
import shutil

cwd = r'c:\Users\Shubham\Desktop\scripts\.vscode\chemediit'

# Files and directories to remove
to_remove = [
    'node_modules', 'src', 'public',
    'package.json', 'package-lock.json', 'vite.config.js', 'tailwind.config.js',
    'index.html', 'deploy.bat', 'push_to_git.bat'
]

for item in to_remove:
    path = os.path.join(cwd, item)
    try:
        if os.path.isdir(path):
            shutil.rmtree(path)
        elif os.path.exists(path):
            os.remove(path)
    except Exception as e:
        print(f"Error removing {item}: {e}")

# Copy original file to index.html
src = os.path.join(cwd, 'chemediit_complete.html')
dst = os.path.join(cwd, 'index.html')
try:
    shutil.copy2(src, dst)
    print("Restore successful.")
except Exception as e:
    print(f"Error copying file: {e}")
