#!/bin/bash
echo "🔍 Testing security headers after deployment..."
echo "Waiting 60 seconds for deployment to propagate..."
sleep 60

echo ""
echo "📋 Current security headers:"
curl -s -I https://www.auroradream.ca | grep -i -E "x-frame-options|x-content-type-options|referrer-policy|permissions-policy|strict-transport-security|content-security-policy"

echo ""
echo "🤖 Testing robots.txt:"
curl -s https://www.auroradream.ca/robots.txt | head -5

echo ""
echo "⚡ Performance test:"
time curl -s -o /dev/null https://www.auroradream.ca

echo ""
echo "🎉 Security test complete!"
