# Utiliser `git bisect` pour isoler un bug

Dans cet exercice, vous allez apprendre à identifier le commit qui a introduit un bug dans le code, en utilisant la commande `git bisect`.    

Un test unitaire fonctionnait auparavant, mais une modification dans un commit a causé son échec. Votre objectif est de trouver le commit qui a introduit ce bug, de restaurer le fichier avec la version correcte, puis de créer un commit de correction.  

Le bug a été introduit dans l'un des commits entre le premier commit (chore: init project) et le dernier.  
Votre objectif est de trouver le commit qui a causé l'échec du test.

## Étapes

### Installation

```
npm i
```

### Lancer les tests 👀

- Tester l'état actuel du code

Lancez les tests pour vérifier le bug actuel dans le code :

```bash
npm run test
```

Une fois que vous avez identifié un test qui échoue, vous pouvez isoler le test spécifique en utilisant la commande suivante :

```bash
npm run test -- <nom de la feature>
```


- Choisissez un commit antérieur où les tests étaient fonctionnels pour valider l’état correct du code à cet instant.

### Utiliser `git bisect` pour trouver le commit responsable :

- Démarrez une session `git bisect` pour isoler le commit fautif.
- Marquez le commit actuel (HEAD) comme étant défectueux (le test échoue).
- Choisissez un commit plus ancien où vous êtes sûr que les tests fonctionnaient.
- `git bisect` va alors basculer entre les commits pour vous aider à identifier le commit fautif. À chaque étape, exécutez pnpm test -- add et indiquez si le commit actuel est "bon" ou "mauvais" en fonction du résultat du test.

Vérifier et restaurer le fichier problématique :

Une fois que vous avez identifié le commit fautif, récupérez uniquement la version correcte du fichier de test depuis le commit trouvé pour corriger le problème.
Restaurer le  fichier fautif dans le commit problématique pour restaurer la version correcte.

Créer un commit de correction avec un fixup :

Une fois le fichier restauré, effectuez un commit fixup pour que cette correction s’applique directement au commit fautif.

Lancez la commande `git reflog`, appelez moi et expliquez moi ce que vous avez fait.