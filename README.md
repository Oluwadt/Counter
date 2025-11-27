# Horizontally Scaled React App with NGINX Load Balancing

This project demonstrates how to deploy a simple React (Vite) application using a **production-ready DevOps architecture** with:

- Multi-stage Docker builds  
- Three horizontally scaled application containers  
- An NGINX reverse proxy acting as a load balancer  
- docker-compose for local orchestration  
- Least-connection load balancing for efficient traffic distribution

The application itself is intentionally simple—a React counter—but the deployment environment mirrors what real production teams use.

---

## Features

### **Frontend**
- React + Vite
- Simple interactive counter
- Built into static files served by NGINX

### **DevOps Architecture**
- Multi-stage Dockerfile (`node` → `nginx`)
- Three containers running identical builds
- NGINX reverse proxy
- `least_conn` load balancing algorithm
- docker-compose orchestration
- Clean separation of build and runtime environments

---

## Running the Project with Docker Compose

Make sure Docker and docker-compose are installed.

```bash
docker-compose up --build
```

Once the containers are ready, visit:

`http://localhost:8080`

NGINX will load balance requests across:

-   `app1:80`

-   `app2:80`

-   `app3:80`

You can observe the balancing behavior by refreshing the page or inspecting logs.

* * * * *

How It Works
---------------

### **Multi-stage Build**

1.  Node image builds the Vite app → produces `/dist`

2.  NGINX image serves `/dist` as static content

This keeps the final image lightweight and secure.

### **Load Balancing**

`nginx.conf` uses:

`least_conn;
server app1:80;
server app2:80;
server app3:80;`

This sends requests to whichever server currently has the fewest active connections.

* * * * *

Why This Project Matters
---------------------------

This setup reflects real-world principles used in production:

-   Horizontal scalability

-   Stateless containers

-   Reverse proxying

-   Separation of build and runtime

-   Efficient traffic distribution

-   Reproducible local environments

It's a solid foundation for understanding modern DevOps architecture.

* * * * *

License
----------

MIT License
