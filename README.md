<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# A SILENT SAFETY SUPPORT SYSTEM 🎯

## Basic Details

### Team Name: Nik-An Core

### Team Members
- Member 1: Anusree Raj - College of Engineering and Management Punnapra
- Member 2: Nikitha S Kumar - College of Engineering and Management Punnapra

### Hosted Project Link
https://github.com/AnusreeeRaj/A_Silent_Support_System

### Project Description
A Silent Support System for Domestic Abuse & Harassment is a privacy-first mobile application disguised as a normal utility app that allows women to seek emergency help without alerting the abuser. Using hidden triggers, it silently sends live location, emergency alerts, and optional evidence to trusted contacts or helplines. The system prioritizes encryption, offline support, and secure communication to ensure safety in high-risk situations.

### The Problem statement

Domestic abuse and harassment remain severely underreported due to fear of retaliation, social stigma, and lack of safe reporting mechanisms. Existing safety applications are often easily detectable, require visible interaction, or depend heavily on internet access, making them ineffective in high-risk or surveillance-controlled environments.

There is a critical need for a secure, discreet, and privacy-first digital system that enables women to silently seek emergency assistance, share real-time location, and preserve evidence without alerting the abuser or compromising their safety.

### The Solution
The proposed solution is a privacy-first, disguised mobile application that allows women to silently seek emergency help without alerting the abuser. During registration, the user securely pre-adds trusted emergency contacts.

When a hidden trigger is activated, the system automatically shares the user’s live location and a predefined emergency alert message to those pre-registered contacts via internet or SMS, ensuring fast and discreet assistance.

---

## Technical Details

### Technologies
- Languages used: JavaScript
- Frameworks used: React Native (via Expo)
- Libraries used: expo-location (to fetch live GPS location), expo-sms (to send SOS message to pre-registered emergency contacts)
- Tools used: Expo CLI, VS Code, Git

---

## Features

- Feature 1: Disguised Application Interface
- Feature 2: Hidden SOS Activation Mechanism
- Feature 3: Instant Location Sharing (Single Snapshot)
- Feature 4: Automated SOS Message to Prefetched Contacts
- Feature 5: Privacy-Focused Design

---

## Implementation

#### Installation
```bash
Installation commands - npm install
```

#### Run
```bash
Run commands - npx expo start

```

---

## Project Documentation

#### Screenshots (Add at least 3)

![alt text](disguised_user_interface.jpeg)
Shows the Disguised User Interface as Calculator 

![alt text](location_permission_after_secret_code.jpeg)
After entering the secret unlock code, permission to share your location is visible

![alt text](emergency_sos.jpeg)
The location along with a message is sent to the prefetched emergency number and an acknowledgement showing the response is received.

#### Diagrams

**System Architecture:**

![Architecture Diagram](architecture.jpeg)
System Architecture – Silent Support System

1. Architecture Type

The system follows a standalone mobile application architecture. It is built using React Native with Expo and runs entirely on the user’s device. There is no backend server, no cloud database, and no external API. All core processing is handled locally on the mobile device.

2. Main Components

User Interface Layer
This layer is built using React Native with Expo. It includes the disguised calculator interface, emergency contact registration screen, and hidden PIN detection logic. It handles user interaction and triggers the SOS workflow when the secret PIN is entered.

SOS Activation Module
This module controls the emergency workflow. Once the hidden PIN is detected, it initiates the sequence of fetching the current location, composing the SOS message, and sending the SMS to registered contacts.

Location Module
This module uses the expo-location library. It requests location permissions from the user and retrieves the current GPS coordinates (latitude and longitude). It captures a single location snapshot during SOS activation.

Contact Storage Module
Emergency contact numbers are registered by the user and stored locally on the device. No cloud storage or external database is used. Data persistence is handled within the mobile environment.

SMS Module
This module uses the expo-sms library. It composes a predefined SOS message that includes the user’s current location link and sends it as an SMS to all registered emergency contacts.

External Actor – Emergency Contact
Emergency contacts receive the SMS alert containing the emergency message and location details. This is the only external interaction in the system.

3. Data Flow

Registration Phase
The user registers emergency contact numbers.
The application stores these numbers locally on the device.

SOS Activation Phase
The user enters the hidden PIN in the disguised interface.
The SOS Activation Module detects the PIN.
The system requests the current GPS location using the Location Module.
The coordinates are returned to the application.
The system composes an SOS message including the location link.
The SMS Module sends the message to all registered emergency contacts.
The application returns to the disguised interface.

4. Tech Stack Interaction

Frontend
React Native is used for building the user interface and application logic.
Expo framework is used for development and access to device capabilities.

Libraries
expo-location interacts with the device GPS hardware to obtain real-time coordinates.
expo-sms interacts with the device’s SMS service to send text messages.

Device Services
The system interacts directly with mobile hardware services such as GPS and SIM network for SMS transmission.

5. System Characteristics

The system operates completely offline except for SMS network availability.
It has low latency because processing is done locally.
It has minimal infrastructure cost since no backend is required.
It is simple to deploy and maintain.

Limitations include lack of live tracking, no remote monitoring capability, no centralized logging, and limited scalability since it is purely device-based.

**Application Workflow:**

![Workflow](workflow.jpeg)
Caption: Use Case Diagram – Silent Support System Workflow

This Use Case Diagram represents the functional workflow of the Silent Support System from the user’s perspective.

The User actor interacts with two primary use cases:

1. Register Emergency Contacts

    Includes the sub-function Store Contacts Securely, ensuring that prefetched emergency numbers are saved safely within the system.

2. Activate Hidden SOS

    Includes multiple mandatory sub-functions:
     Fetch Current Location
     Compose SOS Message
     Send SOS via SMS

When the user triggers the hidden SOS mechanism, the system automatically executes all included use cases in sequence. The final use case, Send SOS via SMS, communicates with the external actor Emergency Contact, who receives the alert and location details.

The system boundary clearly defines what functionalities belong to the Silent Support System, while the actors remain external to it. The `<<include>>` relationships indicate mandatory internal processes that are executed whenever the main use case is triggered.

This diagram visually defines the system scope, core functionalities, and external interactions in a structured UML format.

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example: Basic usage
python script.py input.txt
```

#### Demo Output

**Example: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

---

## Project Demo

### Video
(https://youtu.be/EeQlvoicB9w)

This video demonstrates the complete working of the Silent Support System for Domestic Abuse and Harassment. It shows the user registration process where emergency contacts are securely stored, followed by the hidden SOS activation mechanism disguised within a normal utility interface.

The video clearly presents how the system fetches the current location, composes the predefined SOS message, and sends the alert via SMS to the prefetched emergency contacts. It highlights the privacy-focused design, smooth workflow execution, and real-time functioning of the application.

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## Team Contributions

- Nikitha S Kumar - Frontend development using Expo, UI design implementation, SOS activation logic development, Location integration using Expo Location API, SMS integration using Expo SMS API, UML diagram design, Testing and debugging, Documentation preparation
- Anusree Raj - Frontend component development using Expo, Emergency contact storage implementation, Hidden trigger mechanism implementation, Message composition module development, System architecture design, Testing and validation, Documentation and presentation preparation

---

## License

This project is licensed under the [MIT] License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ at TinkerHub
