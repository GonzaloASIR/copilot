# Utiliza una imagen de Nginx para servir archivos estáticos
FROM nginx:alpine

# Elimina la configuración por defecto de Nginx
delete /etc/nginx/conf.d/default.conf

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de la app al directorio raíz de Nginx
COPY demo-table.html /usr/share/nginx/html/index.html
COPY demo-table.js /usr/share/nginx/html/demo-table.js

EXPOSE 80
