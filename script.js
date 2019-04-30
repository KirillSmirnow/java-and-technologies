TECH = ["boot.png", "cloud.png", "data.jpg", "docker.png", "elasticsearch.png", "hibernate.svg", "jwt.svg",
    "mongodb.jpg", "neo4j.svg", "postgresql.svg", "rabbitmq.png", "redis.jpg", "security.png", "spring.svg",
    "tomcat.png", "vaadin.jpg"]
    .sort(() => Math.random() - 0.5);

let techDiv = document.getElementById("tech-div");

for (let imageIndex in TECH) {
    let image = document.createElement("img");
    image.src = "./tech/" + TECH[imageIndex];
    image.className = "tech";
    techDiv.appendChild(image);
}
