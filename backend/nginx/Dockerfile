FROM nginx:1.25

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom configuration into the container
COPY nginx.conf /etc/nginx/conf.d/

# Ensure required directories for Let's Encrypt are present
# RUN mkdir -p /var/www/demo.devprattle.com/html
