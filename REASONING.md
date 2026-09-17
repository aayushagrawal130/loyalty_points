# Reasoning

## Problem Understanding

The system is designed for a multi-level parking garage where an
attendant needs to manage vehicle check-in, check-out, parking spots,
billing and vehicle lookup.

## Design Priorities

The implementation prioritizes:

1. Correct check-in
2. Correct check-out
3. Accurate fee calculation
4. Preventing double allocation of spots
5. EV spot enforcement
6. Searchability
7. Automation
8. Usable UI

## Architecture

The application uses a React frontend and an Express REST API
with MongoDB persistence.

## Core Entities

- User
- ParkingSpot
- ParkingSession
- RateCard

## Testing and Fixes

Testing observations and bugs fixed during development will be
recorded here.