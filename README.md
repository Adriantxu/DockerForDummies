# DockerForDummies

Welcome! This is a Docker repository. Well is a repository that is used to guide
new joiners on Docker.

This is plan to be used after the docker presentation

## How to install Docker

Get here and install it, I will be using linux (ubuntu) to this workshop

https://docs.docker.com/get-docker/

## Step 0

Once you follow the installation process you can verify if it works by running:

```bash
docker run hello-world
```

You should see something like this in your terminal:

```bash
Hello from Docker!

This message shows that your installation appears to be working correctly.

...
```

## Step 1

Now that you have docker installed, you can start playing with it.

First of all I want you to pull the "Nginx" official image from the docker hub.

The goal of this step is to run a simple server using this image

Heads up! No dockerfile required. Basic docker file commands only.

## Step 2

Now that you have a running container, congrats!

But what if you want to change something in the container? Like the default page?

Well, you can do that by creating a dockerfile and building a new image.

In the step02 folder you will find an index.html. Use that to subtitute the default page.

Show me the new Nginx page when you finish!

## Step 3

Hey! You did it? Amazing job. Let's ship you image to docker hub! WDYT?

Let's start by going to docker hub and creating an account.

https://hub.docker.com/

Once you have an account, you can create a new repository.

You can name it whatever you want, but I will name it "docker-for-dummies"

Then going back to your terminal you need to log to docker

```bash
docker login
```

Once you are logged in, you can tag your image with your docker hub username and the name of the repository you just created.

```bash
docker tag <image_id> <docker_hub_username>/<repository_name>
```

Then you can push your image to docker hub

```bash
docker push <docker_hub_username>/<repository_name>
```

After pushing the image is available for everyone to use. Just remember to replace `<docker_hub_username>/<repository_name>` with your own values.

Congrats! Now anyone with access to docker hub can pull your image down and run it.

If you want to try it out. Why not run images from your patners?

## Step 4

This is the last step. Here I give you a simple express server that you can write a file and be saved to your computer.

You have 3 elements you don't need to touch (you might break it)

Inside step04 folder:
1. index.html
2. server.js
3. package.json

You need to create a dockerfile that will run the server.js file.

If you are new to web dev I'll give you a few tips for this to work:

1. The base image of js in Node
2. Express is hoping to find index.html inside a "public" folder
3. There is a package.json with the dependencies of the project. Make sure to copy it and install them!
4. The server is running on port 3000, so make sure to expose that when creating the container.
5. You should use CMD ["node", "server.js"] as the entrypoint.
6. Use a volume as "/app/text_files" for the files to be preserved.

Knowing all this just build the image and run the server using:

```bash
# Build image
docker build . -t <image_name>

# Run server
docker run -d -p 3000:3000 -v $(pwd)/text_files:/app/text_files <image_name>
```