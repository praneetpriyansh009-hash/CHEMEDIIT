import subprocess
import os

repo_dir = r"c:\Users\Shubham\Desktop\scripts\.vscode\chemediit"
os.chdir(repo_dir)

commands = [
    ["git", "init"],
    ["git", "add", "."],
    ["git", "commit", "-m", "feat: preserve original HTML and Vercel config"],
    ["git", "branch", "-M", "main"],
    ["git", "remote", "add", "origin", "https://github.com/praneetpriyansh009-hash/CHEMEDIIT.git"],
    ["git", "push", "-u", "origin", "main", "--force"]
]

for cmd in commands:
    print(f"Running: {' '.join(cmd)}")
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        print("Success:")
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error (Code {e.returncode}):")
        print(e.stderr)
        # Don't break on remote add if it already exists
        if "remote" in cmd and "already exists" in e.stderr:
            continue
        break
