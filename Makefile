.PHONY: setup validate

setup:
	@echo "Installing Data Validator..."
	@node --version > /dev/null 2>&1 && echo "✓ Node.js available" || echo "⚠ Node.js not found"
	@node scripts/setup.js
	@echo "Installation complete."

validate:
	@echo "Running validation..."
	@node scripts/validate.js
	@echo "Validation complete."
