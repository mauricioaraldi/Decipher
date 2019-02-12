//Array usado para converter número para letras
			alfabetoNL = {0:'A', 1:'B', 2:'C', 3:'D', 4:'E', 5:'F', 6:'G', 7:'H', 8:'I', 9:'J', 10:'K', 11:'L', 12:'M', 13:'N', 14:'O',
						  15:'P', 16:'Q', 17:'R', 18:'S', 19:'T', 20:'U', 21:'V', 22:'W', 23:'X', 24:'Y', 25:'Z'};
						  
			//Array usado para converter letras para números
			alfabetoLN = {A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10, L:11, M:12, N:13, O:14, P:15, Q:16, R:17, S:18, T:19, U:20,
						  V:21, W:22, X:23, Y:24, Z:25};
						  
			numbers = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9'};

			function caesarEncriptCharacter(character, amount) {
			
				//Se o character for uma letra
				if (alfabetoLN[character] || alfabetoLN[character] == 0) {
					character = character.toUpperCase();
					
					charPosition = alfabetoLN[character];
					
					//Incrementa o character pelo número passado
					for (n = amount; n > 0; n--) {
						if (charPosition < 25) {
							charPosition++;
						} else {
							charPosition = 0;
						}
					}
					
					return alfabetoNL[charPosition];
					
				//Se o character for um número
				} else if (numbers[character] || numbers[character] == 0) {
					charPosition = numbers[character];
					
					//Incrementa o character pelo número passado
					for (n = amount; n > 0; n--) {
						if (charPosition < 9) {
							charPosition++;
						} else {
							charPosition = 0;
						}
					}
					
					return numbers[charPosition];
				}
				
				return ('CARACTER INVÁLIDO');
			};
			
			function caesarDecriptCharacter(character, amount) {
			
				//Se o character for uma letra
				if (alfabetoLN[character] || alfabetoLN[character] == 0) {
					character = character.toUpperCase();
				
					charPosition = alfabetoLN[character];
					
					//Decrementa o character pelo número passado
					for (p = amount; p > 0; p--) {
						if (charPosition > 0) {
							charPosition--;
						} else {
							charPosition = 25;
						}
					}
					
					return alfabetoNL[charPosition];
					
				//Se o character for um número
				} else if (numbers[character] || numbers[character] == 0) {
					charPosition = numbers[character];
					
					//Decrementa o character pelo número passado
					for (p = amount; p > 0; p--) {
						if (charPosition > 0) {
							charPosition--;
						} else {
							charPosition = 9;
						}
					}
					
					return numbers[charPosition];
				}
				
				console.log('CARACTER INVÁLIDO');
			};
			
			function caesarEncript(text, amount) {
				returnText = "";
				
				for (x = 0; x < text.length; x++) {
					currentChar = text.charAt(x);
					
					currentChar = currentChar.toUpperCase();
					
					//Se currentChar for character válido
					if (alfabetoLN[currentChar] || alfabetoLN[currentChar] == 0 || numbers[currentChar] || numbers[currentChar] == 0) {
						currentChar = caesarEncriptCharacter(currentChar, amount);
					}
					
					returnText += currentChar;
				}
				
				return returnText;
			};
			
			function caesarDecript(text, amount) {
				returnText = "";
				
				for (x = 0; x < text.length; x++) {
					currentChar = text.charAt(x);
					
					currentChar = currentChar.toUpperCase();
					
					//Se o currentChar for character válido
					if (alfabetoLN[currentChar] || alfabetoLN[currentChar] == 0 || numbers[currentChar] || numbers[currentChar] == 0) {
						currentChar = caesarDecriptCharacter(currentChar, amount);
					}
					
					returnText += currentChar;
				}
				
				return returnText;
			};
			
			function viginereEncript(text, key) {
				returnText = "";
				text = text.toUpperCase();
				key = key.toUpperCase();
				
				for (v = 0;v < text.length; v++) {	
					currentTextChar = text.charAt(v);
					currentKeyChar = key.charAt(v%key.length);
					
					//Se o textChar for letra
					if (alfabetoLN[currentTextChar] || alfabetoLN[currentTextChar] == 0) {
					
						//Se o keyChar for letra
						if (alfabetoLN[currentKeyChar]  || alfabetoLN[currentKeyChar] == 0) {
							currentTextChar = alfabetoNL[(alfabetoLN[currentTextChar]+alfabetoLN[currentKeyChar])%26];
						
						//Se o keyChar for número
						} else {
							currentTextChar = alfabetoNL[(alfabetoLN[currentTextChar]+parseInt(currentKeyChar))%26];
						}
					
					//Se o textChar for número
					} else if (numbers[currentTextChar] || numbers[currentChar] == 0) {
					
						//Se o keyChar for letra
						if (alfabetoLN[currentKeyChar]  || alfabetoLN[currentKeyChar] == 0) {
							currentTextChar = (parseInt(currentTextChar) + (alfabetoLN[currentKeyChar] % 10))%10;
							
						//Se o keyChar for número
						} else {
							currentTextChar = (parseInt(currentTextChar) + parseInt(currentKeyChar)) % 10;
						}
					}
					
					returnText += currentTextChar;
				}
				
				return returnText;
			};
			
			function viginereDecript(text, key) {
				returnText = "";
				text = text.toUpperCase();
				key = key.toUpperCase();
				
				for (v = 0; v < text.length; v++) {	
					currentTextChar = text.charAt(v);
					currentKeyChar = key.charAt(v%key.length);
					
					//Se o textChar for letra
					if (alfabetoLN[currentTextChar] || alfabetoLN[currentTextChar] == 0) {
						
						//Se o keyChar for letra
						if (alfabetoLN[currentKeyChar] || alfabetoLN[currentKeyChar] == 0) {
						
							//Se o keyChar resultar num número menor ou igual ao número do textChar
							if (alfabetoLN[currentTextChar]-alfabetoLN[currentKeyChar] >= 0) {
								currentTextChar = alfabetoNL[(alfabetoLN[currentTextChar]-alfabetoLN[currentKeyChar])%26];
								
							//Se o keyChar resultar num número maior que o número do textChar
							} else {
								currentTextChar = alfabetoNL[26-Math.abs(alfabetoLN[currentTextChar]-alfabetoLN[currentKeyChar])];
							}
						
						//Se o keyChar for número
						} else {
							
							//Se o keyChar resultar num número menor ou igual ao número do textChar
							if (alfabetoLN[currentTextChar] - parseInt(currentKeyChar) >= 0) {
								currentTextChar = alfabetoNL[(alfabetoLN[currentTextChar] - parseInt(currentKeyChar))];
								
							//Se o keyChar resultar num número maior que o número do textChar
							} else {
								currentTextChar = alfabetoNL[26 - Math.abs(alfabetoLN[currentTextChar]- parseInt(currentKeyChar))];
							}
							
						}
						
					//Se o textChar for número
					} else if (numbers[currentTextChar] || numbers[currentTextChar] == 0) {
						
						//Se o keyChar for letra
						if (alfabetoLN[currentKeyChar] || alfabetoLN[currentKeyChar] == 0) {
						
							//Se o keyChar resultar num número menor que o número do textChar
							if (parseInt(currentTextChar) - alfabetoLN[currentKeyChar] >= 0) {
								currentTextChar = parseInt(currentTextChar) - (alfabetoLN[currentKeyChar]%10);
								
							//Se o keyChar resultar num número maior que o número do textChar
							} else {
								console.log('a');
								currentTextChar = 10 - (Math.abs(parseInt(currentTextChar) - alfabetoLN[currentKeyChar]) % 10);
							}
							
						//Se o key char for número	
						} else {
							
							//Se o keyChar resultar num número menor que o número do textChar
							if (parseInt(currentTextChar) - parseInt(currentKeyChar) >= 0) {
								currentTextChar = parseInt(currentTextChar) - parseInt(currentKeyChar);
								
							//Se o keyChar resultar num número maior que o número do textChar
							} else {
								currentTextChar = 10 - Math.abs(parseInt(currentTextChar) - parseInt(currentKeyChar));
							}
						}
						
					}
					
					returnText += currentTextChar;
				}
				
				return returnText;
			};
			
			window.onload = function() {
				console.log("- - - - - - - - - - - - - - - - - -\nEnscript Ready'n'Running\n- - - - - - - - - - - - - - - - - -");
			};
			
			//Roda todos os testes
			function allTests(detailed) {
				ariu = 'asdasdsa\nsadsad';
			
				var retorno = '~ ~ ~ All Tests Running ~ ~ ~\n';
			
				resultadoCaesarEncriptCharacter = testCaesarEncriptCharacter();
				resultadoCaesarDecriptCharacter = testCaesarDecriptCharacter();
				resultadoCaesarEncript = testCaesarEncript();
				resultadoCaesarDecript = testCaesarDecript();
			
				//Se detalhado for true, imprimirá as mensagens que voltam dos testes
				if (detailed) {
					retorno += resultadoCaesarEncriptCharacter.mensagens;
					retorno += resultadoCaesarDecriptCharacter.mensagens;
					retorno += resultadoCaesarEncript.mensagens;
					retorno += resultadoCaesarDecript.mensagens;
				} 
				
				//Verifica se todos testes foram aprovados
				if (resultadoCaesarEncriptCharacter.aprovado ||
					resultadoCaesarDecriptCharacter.aprovado ||
					resultadoCaesarEncript.aprovado				||
					resultadoCaesarDecript.aprovado				) {
					retorno += '\n\n+ + +Todos testes aprovados com sucesso.';
				} else {
					retorno += '\n- - -Nem todos testes foram aprovados. Passe o parâmetro "true" para mais detalhes.';
				}
				
				retorno += '\n\n~ ~ ~  All Testes Finished ~ ~ ~';
				
				console.log(retorno);
			}
			
			function testCaesarEncriptCharacter() {
				var resultado = {mensagens:'', aprovado:true};
		
				//Se o caracter for uma letra
				//Aprovado
				if (caesarEncriptCharacter('F', 4) == 'J') {
					resultado.mensagens+='\ntestCaesarEncriptCharacter(letra como caracter) executado com sucesso';
					
				//Reprovado
				} else {
					resultado.mensagens+= '\n- - - testCaesarEncriptCharacter(letra como caracter) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o caracter for um número
				//Aprovado
				if (caesarEncriptCharacter(3, 4) == 7) {
					resultado.mensagens+='\ntestCaesarEncriptCharacter(número como caracter) executado com sucesso';
					
				//Reprovado
				} else {
					resultado.mensagens+= '\n- - - testCaesarEncriptCharacter(número como caracter) executado com erros.';
					resultado.aprovado = false;
				}
				
				return resultado;
			}
			
			function testCaesarDecriptCharacter() {
				var resultado = {mensagens:'', aprovado:true};
			
				//Se o caracter for uma letra
				//Aprovado
				if (caesarDecriptCharacter('J', 4) == 'F') {
					resultado.mensagens+='\ntestCaesarDecriptCharacter(letra como caracter) executado com sucesso';
				
				//Reprovado
				} else {
					resultado.mensagens+= '\n- - - testCaesarDecriptCharacter(letra como caracter) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o caracter for um número
				//Aprovado
				if (caesarDecriptCharacter(7, 4) == 3) {
					resultado.mensagens+='\ntestCaesarDecriptCharacter(número como caracter) executado com sucesso';
				
				//Reprovado
				} else {
					resultado.mensagens+= '\n- - - testCaesarDecriptCharacter(número como caracter) executado com erros.';
					resultado.aprovado = false;
				}
				
				return resultado;
			}
			
			function testCaesarEncript() {
				var resultado = {mensagens:'', aprovado:true};
			
				//Aprovado
				if (caesarEncript('135468-juminza', 4) == '579802-NYQMRDE') {
					resultado.mensagens+='\ntestCaesarEncript executado com sucesso';
				
				//Reprovado
				} else {
					resultado.mensagens+= '\n- - - testCaesarEncript executado com erros.';
					resultado.aprovado = false;
				}
				
				return resultado;
			}
			
			function testCaesarDecript() {
				var resultado = {mensagens:'', aprovado:true};
			
				//Aprovado
				if (caesarDecript('579802-NYQMRDE', 4) == '135468-JUMINZA') {
					resultado.mensagens+='\ntestCaesarDecript executado com sucesso';
				
				//Reprovado
				} else {
					resultado.mensagens+= '\n- - - testCaesarDecript executado com erros.';
					resultado.aprovado = false;
				}
				
				return resultado;
			}
			
			function testViginereEncript() {
				var resultado = {mensagens:'', aprovado:true};
				
				//Se o textChar for letra, se o keyChar for letra e se o número keyChar for menor que o número textChar
				//Aprovado
				if (viginereEncript('f', 'd') == 'I') {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, letra como Keychar, número keyChar menor que número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, letra como Keychar, número keyChar menor que número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for letra, se o keyChar for letra e se o número keyChar for igual ao número textChar 
				//Aprovado
				if (viginereEncript('f', 'f') == 'K') {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, letra como Keychar, número keyChar igual a número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, letra como Keychar, número keyChar igual a número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for letra, se o keyChar for letra e se o número keyChar for maior que o número textChar
				//Aprovado
				if (viginereEncript('e', 'i') == 'M') {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, letra como Keychar, número keyChar maior que número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, letra como Keychar, número keyChar maior que número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for letra, se o keyChar for número e s se o número keyChar for menor que o número textChar
				//Aprovado
				if (viginereEncript('e', '3') == 'H') {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, número como Keychar, número keyChar menor que número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, número como Keychar, número keyChar menor que número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for letra, se o keyChar for número e s se o número keyChar for igual ao o número textChar
				//Aprovado
				if (viginereEncript('e', '4') == 'I') {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, número como Keychar, número keyChar igual ao número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, número como Keychar, número keyChar igual ao número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for letra, se o keyChar for número e s se o número keyChar for maior que o número textChar
				//Aprovado
				if (viginereEncript('e', '8') == 'M') {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, número como Keychar, número keyChar maior que número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(letra como textChar, número como Keychar, número keyChar maior que número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for número, se o keyChar for letra e s se o número keyChar for menor que o número textChar
				//Aprovado
				if (viginereEncript('4', 'c') == '6') {
					resultado.mensagem += '\ntestViginereEncript(número como textChar, letra como Keychar, número keyChar menor que número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(número como textChar, letra como Keychar, número keyChar menor que número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				
				//Se o textChar for número, se o keyChar for letra e s se o número keyChar for menor que o número textChar
				//Aprovado
				if (viginereEncript('4', 'c') == '6') {
					resultado.mensagem += '\ntestViginereEncript(número como textChar, letra como Keychar, número keyChar menor que número textChar) executado com sucesso.';
					
				//Reprovado
				} else {
					resultado.mensagem += '\ntestViginereEncript(número como textChar, letra como Keychar, número keyChar menor que número textChar) executado com erros.';
					resultado.aprovado = false;
				}
				return resultado;
			}