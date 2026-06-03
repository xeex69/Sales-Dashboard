# Deploy to Render

## 🚀 Step-by-Step Guide

### Step 1: Go to Render
1. Visit [https://render.com](https://render.com)
2. Click **Sign Up** or **Sign In**
3. Create an account or login with GitHub

### Step 2: Connect GitHub Repository
1. Click **New +** button
2. Select **Web Service**
3. Choose **Deploy from Git Repository**
4. Click **Connect Account** to connect your GitHub
5. Search for and select **Sales-Dashboard** repository
6. Click **Connect**

### Step 3: Configure the Web Service

Fill in the details:
- **Name**: `sales-dashboard` (or any name you prefer)
- **Environment**: `Node`
- **Region**: Choose closest to you
- **Branch**: `main`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Plan**: Select **Free** (for testing) or upgrade later

### Step 4: Environment Variables (Optional)
No environment variables needed for this project. Leave as is.

### Step 5: Deploy
1. Click **Create Web Service**
2. Wait for build to complete (2-3 minutes)
3. You'll see a live URL like: `https://sales-dashboard-xxxx.onrender.com`

---

## ✅ What Happens During Deployment

1. **Build Phase**
   - Installs dependencies (`npm install`)
   - Builds Next.js app (`npm run build`)
   - Creates `.next` optimization folder

2. **Start Phase**
   - Starts production server (`npm start`)
   - App runs on assigned port

3. **Live**
   - Your app is now live at the Render URL!

---

## 🔗 After Deployment

### Your Live Dashboard
- **Home**: `https://sales-dashboard-xxxx.onrender.com/`
- **Dashboard**: `https://sales-dashboard-xxxx.onrender.com/dashboard`

### Features Available
- ✅ All charts working
- ✅ Year selection
- ✅ Chart type switching
- ✅ Custom filtering
- ✅ Data table
- ✅ Statistics cards

---

## 🔄 Auto-Deploy on Updates

With Render connected to GitHub:
1. Push code to GitHub `main` branch
2. Render automatically detects changes
3. Automatically rebuilds and deploys
4. Takes ~2-3 minutes

---

## 📊 Monitoring

On Render dashboard you can:
- View build logs
- Check deployment status
- Monitor performance
- View errors in console

---

## 💡 Tips

### Keep Render Free Tier Running
- Render free tier spins down after 15 minutes of inactivity
- First request may take 30 seconds to wake up
- Upgrade to Starter plan ($7/month) to avoid this

### View Logs
1. Go to Render dashboard
2. Select your service
3. Click **Logs** tab
4. See build and runtime logs

### Redeploy Manually
1. Click **Deploy** button in Render dashboard
2. Select **Manual Deploy**
3. Choose branch and click **Deploy**

---

## 🆘 Troubleshooting

### Build Failed
- Check build logs in Render dashboard
- Ensure `package.json` has correct scripts
- Verify all dependencies are in `package.json`

### App Crashes After Deploy
- Check runtime logs
- Ensure environment variables are set (if needed)
- Verify `npm start` command works locally

### Need More Info
- [Render Documentation](https://render.com/docs)
- [Next.js on Render](https://render.com/docs/deploy-nextjs)

---

## 🎯 Your Deployment Link
Will look like: `https://sales-dashboard-[unique-id].onrender.com`

Once deployed, share this URL with anyone to let them view your dashboard!

---

**Happy deploying!** 🎉
