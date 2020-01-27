# Report - Stage 0

M.D. Sai Anjan (186330013)

Masters Design Project

Guided by prof. Ravi Poovaiah

## Abstract

Long queues at the enquiry in the railway stations is observed most of the time. Sometimes the queues become bigger and passengers who have a query about the current train might take longer. An enquiry is for asking which platform does a particular train is going to arrive also including the time table of intermediate stations can be enquired about. For P3, I want to redesign this enquiry system as an on-platform solution.

## Background

Indian Railways is India's national railway system operated by the Ministry of Railways. It manages the fourth largest railway network in the world by size, with a route length of 67,368-kilometre as of March 2017. These trains connect cities and most important villages of every state of the country. The railways system is very big and confusing for the passengers in order to travel and commute. To facilitate the queries and questions for the passenger Indian railways started an enquiry system for the indian railways has been employed. The aim of this system is to disseminate the information to public. National Train Enquiry System (NTES) developed by CRIS is the backend system which collects information about train running on near real time basis and disseminates information through various interfaces like nationwide unique number 139, Website, face to face enquiry, mobile interfaces etc.

A website or a mobile interfaces require mobile internet and the data is not reliable. Most of the passengers who are using these interfaces fall back to face to face enquiry since it is available on station and has live data coming from NTES/Control room.

But these face to face enquiry attract a lot of crowd and when there is a long queue, a passenger who has a query about a train in less time and is in a hurry he/she finds it difficult to get answer.

An enquiry system which is on platform which gets live data from NTES and control room can support the face to face enquiry system in answering the frequently answered questions or the important ones.

## Goals/Objectives

- Disseminate information from the primary form which is going and enquiring a staff face to face in the enquiry section.
- Having an another form of information gathering which saves the passengers time from standing in a queue.
- Accessing information which is live and correct on the platform/station so as opposed to accessing it on a private app where only small parts of it is available which might be inaccurate/incorrect.
- Access information which was not identified by the passenger to be enquired on a station.

## Scope

- Identifying the most important parts of the enquiry to be included in the design
- What are the most FAQs by the passengers
- What does the interface contain so that it takes less time for each passenger to answer the query quickly
- Should it be a voice/chat/GUI based interface which can facilitate quicker interactions
- Maybe include the indoor navigation directory/map

## What did I do until now?

I visited Vijayawada Junction's Enquiry counter and sat inside the counter to interact with the staff and get to know how do they work. I came to know that there are 30 topics of the enquiry from which any question can be asked and can facilitate all the questions about Railways:

![Report%20Stage%200/IMG_4402.jpg](Report%20Stage%200/IMG_4402.jpg)

The different forms of information sources on the platform or near the concourses at most of the stations in the country are:

> Arrival/Departure LED Boards image

> TV display on the platform with Arrival/Departure

> Train fare details board

> Where is my Train? application screenshot

Where is my train application is used for live train status information. The application doesn't use internet rather it uses mobile network and GPS. When a certain user of the application is inside the train and chooses the train from the search menu it'll start considering the location of the mobile phone as the current location of the train and keeps updating it. This can also crosscheck with multiple users travelling in the same train. Passengers can also edit the platform of the train in the interface. Along with live train status this application also allows for PNR status check and certain time table. All of these facilitate information to the passenger based on an input by the passenger.

> NTES Mobile application

> How Internet can also allow to find information

The passenger asks a question and the enquiry staff understands the query and decodes it to the category it fits into. If the question is generic like "Which platform is my train on?" then the staff looks at the TV which shows the Arrivals/Departures list and answers the platform that is the train currently on. The same TV Screen is setup on all the platforms and the concourse area in each station. These are currently present in stations from A1 to D Category. If the platform is not decided by this public address system then the staff tells them an possible platform the train could arrive and asks them to wait in the concourse and keep an eye on the TV and the LED Boards. Sometimes the passenger might enquire about a ticket to a particular passenger station and then the staff will suggest an ticket which will be the comfortable choice for the passenger like an Antyodaya train ticket. Antyodaya train is an fully unreserved coach passenger train which takes the same time as a passenger or intercity trains and will have an fare of 15% more than the regular unreserved ticket. Most of these processes includes the select a topic preceded by an option number. Then the staff inputs the passenger details like the destination and date and gets the ticket details for the trains going to that particular destination. 

## Design Approach

So the aim of this project is to identify the most frequently asked questions by the passengers and design an system to answer these questions. The project has to choose parts of these information topics in the enquiry system and design an interface which will support the enquiry system. The points of service like the Ticket counter, Reservation counter are still the same and this application does not aim to replace those. When the most important and feasible query topics are identified design thinking will be applied to come up with ideas for these. These will be prototyped and tested.

### Constraints:

Getting real time data from NTES and using it. A proper protocol and permissions from the station manager will help in more visits and interactions with the NTES and the staff.

Cost is not a constraint since the Indian railways have already deployed touch screen based enquiry kiosks called 'Rail Yatri Guide'. But a better and an user friendly system is the needed solution here.

Or a different direction of the project will be to find a frugal solution like AJ Sir's Streetwise Dharavi project.

Safety of the installation or the outcome. Since ATVMs and self ticketing zones have been deployed in most of the stations enquiring the railways about how they are offering the safety to these devices would be a good point to start. 

## Possible Outcomes

1. An GUI based interactive kiosk like the one which is already existing in New Delhi station. Since it is already existing I'll look at if it is answering the most FAQs and important questions intuitively. It would be researched based on the user experience part of it.
Design decisions that needs to be taken for a GUI based kiosk:
What is the easiest UI that can be understood by different types of the passenger and can answer questions intuitively. Like an FAQ based interface or an Chat based interface.
2. An Voice assistant on the platform or station which needs to facilitate questions based on the questions asked by the passenger.
Design decisions would be:
How to account for the noise on the station?
What is the language that will be used to interact?
What is the voice and tone of the interface?

## Where does my work fit?

## What is it not?

- Not an replacement for the enquiry system - Will be an support for the currently existing form of human human interaction
- Not an IVR because an 24X7 Helpline already exists - Wasn't allowed to ask any questions about the IVR system. Will get a permission from the IDC Office and continue doing that

## Timeline