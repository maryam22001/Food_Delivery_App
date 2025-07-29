# Food Delivery App - Docker Deployment Guide

## 🐳 **DOCKERIZED DEPLOYMENT**

This guide covers deploying your Food Delivery App using Docker containers. Perfect for consistent deployment across different environments.

---

## **🏗️ ARCHITECTURE**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx         │    │   Django        │    │   PostgreSQL    │
│   (Port 80)     │◄──►│   (Port 8000)   │◄──►│   (Port 5432)   │
│   Reverse Proxy │    │   Backend       │    │   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React         │    │   Redis         │    │   Media Files   │
│   Frontend      │    │   Cache         │    │   Storage       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## **📋 PREREQUISITES**

- Docker Engine 20.10+
- Docker Compose 2.0+
- Git

---

## **🚀 QUICK START**

### **1. Clone and Setup**
```bash
git clone <your-repo-url>
cd Food_Delivery_App
```

### **2. Configure Environment**
```bash
# Copy environment template
cp env.example .env

# Edit with your values
nano .env
```

### **3. Build and Run**
```bash
# Use the automated script
./docker-build.sh

# Or manually
docker-compose up -d
```

### **4. Access Your App**
- **Frontend**: http://localhost
- **Backend API**: http://localhost:8000
- **Admin Panel**: http://localhost:8000/admin

---

## **🔧 DOCKER CONFIGURATION**

### **Multi-Stage Dockerfile**

The main `Dockerfile` uses multi-stage builds:

1. **Backend Stage**: Builds Django application
2. **Frontend Stage**: Builds React application
3. **Production Stage**: Combines everything with Nginx

### **Docker Compose Services**

```yaml
services:
  db:          # PostgreSQL database
  redis:       # Redis cache
  app:         # Main application (Django + React + Nginx)
  app-dev:     # Development version with hot reload
```

---

## **📦 DEPLOYMENT OPTIONS**

### **Option 1: Production Deployment**
```bash
# Build and run production version
docker-compose up -d

# View logs
docker-compose logs -f app
```

### **Option 2: Development Deployment**
```bash
# Run with development profile
docker-compose --profile dev up -d

# Access development servers
# Frontend: http://localhost:3000
# Backend: http://localhost:8001
```

### **Option 3: Custom Environment**
```bash
# Use custom environment file
docker-compose --env-file .env.production up -d
```

---

## **⚙️ ENVIRONMENT VARIABLES**

### **Required Variables**
```bash
# Database
DATABASE_URL=postgresql://postgres:postgres@db:5432/food_delivery

# Django
SECRET_KEY=your-secret-key
DEBUG=False
ALLOWED_HOSTS=localhost,127.0.0.1

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Admin User (optional)
DJANGO_SUPERUSER_EMAIL=admin@example.com
DJANGO_SUPERUSER_PASSWORD=admin123
```

### **Optional Variables**
```bash
# Redis
REDIS_URL=redis://redis:6379/0

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

---

## **🔍 MONITORING & LOGS**

### **View Logs**
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f app
docker-compose logs -f db

# Last 100 lines
docker-compose logs --tail=100 app
```

### **Health Checks**
```bash
# Check service status
docker-compose ps

# Health check endpoint
curl http://localhost/health/
```

### **Resource Usage**
```bash
# Container stats
docker stats

# Disk usage
docker system df
```

---

## **🛠️ DEVELOPMENT WORKFLOW**

### **Local Development**
```bash
# Start development environment
docker-compose --profile dev up -d

# View logs
docker-compose logs -f app-dev

# Access development servers
# Frontend: http://localhost:3000 (hot reload)
# Backend: http://localhost:8001 (hot reload)
```

### **Code Changes**
```bash
# Frontend changes are automatically reflected
# Backend changes require restart
docker-compose restart app-dev
```

### **Database Operations**
```bash
# Run migrations
docker-compose exec app python manage.py migrate

# Create superuser
docker-compose exec app python manage.py createsuperuser

# Shell access
docker-compose exec app python manage.py shell
```

---

## **🔒 SECURITY CONSIDERATIONS**

### **Production Security**
1. **Change default passwords**
2. **Use strong SECRET_KEY**
3. **Enable HTTPS**
4. **Configure firewall rules**
5. **Regular security updates**

### **Environment Variables**
```bash
# Never commit .env files
# Use Docker secrets for production
# Rotate keys regularly
```

### **Network Security**
```bash
# Use internal networks
# Expose only necessary ports
# Implement rate limiting
```

---

## **📈 SCALING**

### **Horizontal Scaling**
```bash
# Scale application instances
docker-compose up -d --scale app=3

# Use load balancer
# Configure Nginx upstream
```

### **Database Scaling**
```bash
# Use external database
# Implement connection pooling
# Configure read replicas
```

### **Caching**
```bash
# Redis for session storage
# Redis for API caching
# CDN for static files
```

---

## **🚨 TROUBLESHOOTING**

### **Common Issues**

1. **Port Conflicts**
   ```bash
   # Check port usage
   netstat -tulpn | grep :80
   
   # Change ports in docker-compose.yml
   ports:
     - "8080:80"
   ```

2. **Database Connection Issues**
   ```bash
   # Check database logs
   docker-compose logs db
   
   # Test connection
   docker-compose exec app python manage.py wait_for_db
   ```

3. **Build Failures**
   ```bash
   # Clean build
   docker-compose build --no-cache
   
   # Check Dockerfile syntax
   docker build -t test .
   ```

4. **Permission Issues**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   
   # Check volume permissions
   docker-compose exec app ls -la /app
   ```

### **Debug Commands**
```bash
# Enter container
docker-compose exec app bash

# Check processes
docker-compose exec app ps aux

# Check network
docker network ls
docker network inspect food_delivery_app_default
```

---

## **🔄 CI/CD INTEGRATION**

### **GitHub Actions**
```yaml
# Build and test
- name: Build Docker image
  run: docker-compose build

# Deploy to production
- name: Deploy to server
  run: |
    docker-compose -f docker-compose.prod.yml up -d
```

### **Docker Registry**
```bash
# Build and push
docker build -t your-registry/food-delivery:latest .
docker push your-registry/food-delivery:latest

# Pull and run
docker pull your-registry/food-delivery:latest
docker-compose up -d
```

---

## **💾 DATA MANAGEMENT**

### **Database Backups**
```bash
# Create backup
docker-compose exec db pg_dump -U postgres food_delivery > backup.sql

# Restore backup
docker-compose exec -T db psql -U postgres food_delivery < backup.sql
```

### **Volume Management**
```bash
# List volumes
docker volume ls

# Backup volumes
docker run --rm -v food_delivery_app_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres_data.tar.gz -C /data .

# Restore volumes
docker run --rm -v food_delivery_app_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres_data.tar.gz -C /data
```

---

## **🎯 BEST PRACTICES**

### **Docker Best Practices**
1. **Use multi-stage builds**
2. **Minimize layer count**
3. **Use .dockerignore**
4. **Security scanning**
5. **Regular base image updates**

### **Application Best Practices**
1. **Environment-specific configs**
2. **Health checks**
3. **Graceful shutdown**
4. **Logging standards**
5. **Monitoring integration**

---

## **📚 USEFUL COMMANDS**

### **Docker Compose**
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs -f

# Scale services
docker-compose up -d --scale app=3
```

### **Docker**
```bash
# Build image
docker build -t food-delivery .

# Run container
docker run -p 80:80 food-delivery

# View containers
docker ps

# Clean up
docker system prune -a
```

---

## **🎉 DEPLOYMENT CHECKLIST**

- [ ] Docker and Docker Compose installed
- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] Static files collected
- [ ] Migrations applied
- [ ] Services running
- [ ] Health checks passing
- [ ] Logs monitored
- [ ] Security configured
- [ ] Backup strategy in place

---

**Your Food Delivery App is now fully containerized and ready for deployment!** 🐳🚀 