{
	"folders": [],
	"launch": {
		"version": "0.2.0",
		"configurations": [
			{
				"type": "vscode-edge-devtools.debug",
				"request": "launch",
				"name": "Launch Microsoft Edge and open the Edge DevTools",
				"url": "http://localhost:8080",
				"webRoot": "${workspaceFolder}"
			},
			{
				"name": "Attach to Edge",
				"port": 9222,
				"request": "attach",
				"type": "msedge",
				"webRoot": "${workspaceFolder}"
			},
			{
				"name": "Chrome",
				"request": "launch",
				"type": "msedge",
				"url": "http://localhost:8080",
				"webRoot": "${workspaceFolder}"
			}

		]
	}
}
