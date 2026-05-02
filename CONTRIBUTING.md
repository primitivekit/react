# Contributing

## Development Workflow

### Branches
- `main` - Production (auto-publishes to NPM on version change)
- `develop` - Development

### Making Changes

1. **Work on develop branch:**
   ```bash
   git checkout develop
   # Make your changes
   git add .
   git commit -m "Your changes"
   git push origin develop
   ```

2. **Bump version and merge to main:**
   ```bash
   # Patch: 0.0.1 -> 0.0.2
   npm version patch
   
   # Minor: 0.0.1 -> 0.1.0
   npm version minor
   
   # Major: 0.0.1 -> 1.0.0
   npm version major
   ```

3. **Merge to main:**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

This will automatically publish to NPM.

## Local Development

```bash
npm install
npm run build
npm link

# In another project
npm link @primitivekit/react
```

## Testing

Before publishing, test your changes locally.
