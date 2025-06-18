const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const quickref = document.getElementById('quickref');
const passwordHash = "bylickilabs";

let level = 1;
let reputation = 0;
const unlockedTools = new Set();

const commands = {
  help: () => 'help, clear, uploadFile, unlock [tool], showMap, run, ddosSim, passCrack, logParse, stegoFind',
  clear: () => { terminalOutput.innerText = ''; return ''; },
  
  uploadFile: () => {
    if (unlockedTools.has('uploadFile')) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt,.log,.jpg,.png';

      input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          print(`📁 Datei ausgewählt: ${file.name}`);
          const formData = new FormData();
          formData.append('file', file);

fetch('http://localhost:8080/upload', {
  method: 'POST',
  body: formData
})
.then(response => {
  if (!response.ok) throw new Error(`HTTP-Fehler Status ${response.status}`);
  return response.json();
})
.then(data => {
  if (data.success) {
    print(`✅ ${file.name} erfolgreich hochgeladen.`);
  } else {
    print(`❌ Fehler: ${data.message}`);
  }
})
.catch(error => {
  print(`❌ Fehler: ${error.message}`);
});
 
        }
      };
      input.click();
      return 'Bitte Datei auswählen.';
    } else {
      return '❌ Datei-Upload nicht freigeschaltet. Nutze "unlock uploadFile".';
    }
  },

  unlock: (args) => {
    const tool = args[0];
    const password = prompt(`🔐 Passwort für ${tool}:`);

    if (password === passwordHash) {
      unlockedTools.add(tool);
      reputation += 10;
      level = Math.floor(reputation / 30) + 1;
      updateStatus();
      return `✅ Tool "${tool}" freigeschaltet.\nReputation: ${reputation}, Level: ${level}`;
    }
    return '❌ Zugriff verweigert. Falsches Passwort.';
  },

  ddosSim: () => {
    if (unlockedTools.has('ddosSim')) {
      print('🔌 DDoS-Simulation läuft...');
      setTimeout(() => print('💥 DDoS-Simulation abgeschlossen!'), 3000);
    } else {
      return '❌ DDoS-Simulation nicht freigeschaltet.';
    }
  },

  passCrack: () => {
    if (unlockedTools.has('passCrack')) {
      print('🔑 Passwortknacken läuft...');
      setTimeout(() => print('✅ Passwort "admin123" geknackt!'), 5000);
    } else {
      return '❌ Passwortknacken nicht freigeschaltet.';
    }
  },

  logParse: () => {
    if (unlockedTools.has('logParse')) {
      print('📂 Log-Analyse gestartet...');
      setTimeout(() => print('✅ Fehler entdeckt: Login von 192.168.0.101'), 4000);
    } else {
      return '❌ Log-Analyse nicht freigeschaltet.';
    }
  },

  stegoFind: () => {
    if (unlockedTools.has('stegoFind')) {
      print('🖼 Steganografie-Analyse läuft...');
      setTimeout(() => print('✅ Versteckte Nachricht entdeckt: "Server X"'), 4000);
    } else {
      return '❌ Steganografie-Analyse nicht freigeschaltet.';
    }
  },

  showMap: () => {
    quickref.style.display = 'block';
    return '🗺️ Netzwerk-Overlay aktiviert.';
  },

	run: () => {
	commands.showMap();
	return [
		'🎮 ZeroTrace gestartet...',
		'🧠 Mission geladen.',
		'📡 Netzwerk aktiviert.',
		commands.help(),
		`Reputation: ${reputation}, Level: ${level}`,
		'💡 Gib "help" ein, um alle Befehle zu sehen.'
		].join('\n');
	}
};

function updateStatus() {
  const statusBar = document.getElementById('status-bar');
  if (statusBar) {
    statusBar.innerText = `Reputation: ${reputation} | Level: ${level}`;
  } else {
    console.error('❌ Status-Bar nicht gefunden!');
  }
}

function print(text) {
  terminalOutput.innerText += text + '\n';
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function handleCommand(input) {
  const [cmd, ...args] = input.trim().split(' ');
  print('> ' + input);
  if (commands[cmd]) {
    print(commands[cmd](args));
  } else {
    print('❌ Unbekannter Befehl: ' + cmd);
  }
}

let typingTimeout;
terminalInput.addEventListener('keydown', e => {
  if (typingTimeout) clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    if (e.key === 'Enter') {
      handleCommand(terminalInput.value);
      terminalInput.value = '';
    }
  }, 100);
});
