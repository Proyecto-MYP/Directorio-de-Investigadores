# Use an official Python runtime as a parent image
FROM python:3
# Set the working directory to /app
WORKDIR /system

# Copy the current directory contents into the container at /app
COPY . .
#COPY start.sh /start.sh

# Install any needed packages specified in requirements.txt
RUN pip install -r system/requirements

# Make port 80 available to the world outside this container
EXPOSE 8000
# Run app.py when the container launches
CMD ["./start.sh"]
