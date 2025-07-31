# Lee's SuppCo FE Interview

## Overview

Build a supplement comparison app that allows users to browse, view and compare supplement products. The application should demonstrate your ability to use AI tools effectively while making thoughtful architectural decisions.

### Constraints

- Time Limit: 1 hour
- Tech Stack: Any front-end stack (React, Svelte, Vue, vanilla JS, etc.)
- LLM Usage: As much as you want

### User Requirements

1. Search Products
Display a searchable grid/list of supplement products

Each product card shows:
- Product name
- Brand
- Category (Creatine, Fish Oil, etc)
- Primary ingredient
- TrustScore (0-10)
- Price

Include filters for:
- Category
- Price range
- TrustScore

2. View Product Details
Display comprehensive product information:

- All search result fields plus:
  - Full ingredient list with amounts
  - Third-party certifications
  - TrustScore breakdown

3. Compare Products

- Allow users to compare 2 products side-by-side
- Show all product detail information in a table format
- Highlight differences between products

### API Design
This application should be purely front-end, but it doesn't mean we don't care about the back-end. Design an in-memory API that can be swapped out with a real implementation later.

Imagine that we have defined the contract with the back-end API, but it's not implemented. Your job is to create a stub version of that API that can act and behave just like the real API, without writing a back-end.

Requirements:

- Design what the back-end API should look like
- Define your backend service layer inside the front-end application
- Include notes on how the real version will be implemented and what the HTTP API looks like (notes are fine, we don't need a sub-able component)

Deliverables:
- Demo-able application - Must run locally with clear setup instructions
- Code walkthrough - Be able to explain your implementation choices
- AI usage discussion - Be prepared to talk about your experience using AI to code
- Component design - Be prepared to discuss your component architecture decisions
- API design - Be prepared to discuss the design of your internal persistence layer and the api in which that layer communicates with the backend.

Notes

Don't worry about perfect product data. Use LLM-generated data for categories and products - just enough to demonstrate that the application functions properly.
