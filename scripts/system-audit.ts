// [JAVARI-FIX] .github/workflows/e2e-tests.yml
name: Henderson Standards E2E Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  e2e-tests:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18' # Change to a supported version

      - name: Install dependencies
        run: npm install

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload test results
        uses: actions/upload-artifact@v4
        with:
          name: e2e-test-results
          path: ./test-results/ # Update as per the path of your test results
          
      - name: Cleanup orphan processes
        run: |
          docker network prune -f
          docker system prune -af --volumes