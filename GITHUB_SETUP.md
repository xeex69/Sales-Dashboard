# GitHub Setup Guide

## 🚀 Pushing Your Sales Dashboard to GitHub

Follow these steps to push your project to GitHub:

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in the details:
   - **Repository name**: `sales-dashboard` (or your preferred name)
   - **Description**: "A modern sales analytics dashboard built with Next.js 15, TypeScript, and Recharts"
   - **Visibility**: Choose Public (for sharing) or Private
   - **DO NOT initialize** with README, .gitignore, or license (we already have these!)
5. Click **Create repository**

### Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd "/Users/tusharr/Desktop/frontend intern/sales-dashboard"

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/sales-dashboard.git

# Rename branch to main if needed
git branch -M main

# Push your code
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 3: Verify on GitHub

1. Go to your repository URL: `https://github.com/YOUR_USERNAME/sales-dashboard`
2. Verify all files are pushed correctly
3. Check that the README is displaying properly

## 🔑 Authentication

### Using Personal Access Token (Recommended)

If you haven't set up authentication, GitHub will prompt you. Use a Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **Generate new token**
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token and paste it when prompted for password

### Using SSH (Advanced)

For SSH authentication setup, see [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## 📝 Making Future Updates

After initial push, making updates is simple:

```bash
cd "/Users/tusharr/Desktop/frontend intern/sales-dashboard"

# Make your changes, then:
git add .
git commit -m "Your commit message"
git push
```

## 🔗 Useful Links

- **Repository**: `https://github.com/YOUR_USERNAME/sales-dashboard`
- **Clone command**: `git clone https://github.com/YOUR_USERNAME/sales-dashboard.git`
- **GitHub Pages**: You can enable GitHub Pages in repository settings to deploy

## 📋 Commit History

Your repository will have these initial commits:

1. **Initial commit**: Sales Dashboard with Atomic Design, Charts, and Filtering
2. **Fix ESLint errors**: TypeScript type safety improvements

## 🎯 Next Steps After Push

1. Add a GitHub Actions workflow for CI/CD
2. Enable branch protection rules
3. Set up GitHub Pages for deployment
4. Add badges to README (build status, license, etc.)
5. Create GitHub Issues for future enhancements
6. Set up a project board for tracking tasks

---

**Questions?** Check the [GitHub Documentation](https://docs.github.com) or [Git Documentation](https://git-scm.com/doc)
