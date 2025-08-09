#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping des pages vers leurs data-page correspondants
const pageMapping = {
    'index.html': 'accueil',
    'about.html': 'biographie', 
    'events.html': 'agenda',
    'gallery.html': 'galerie',
    'ensembles.html': 'ensembles',
    'reflection.html': 'reflexion',
    'media.html': 'media',
    'repertoire.html': 'repertoire',
    'contact.html': 'contact'
};

console.log('🧭 CORRECTION BREADCRUMBS: Mise à cohérence du fil d\'Ariane...\n');

Object.entries(pageMapping).forEach(([filename, activePage]) => {
    const filePath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} n'existe pas, ignoré`);
        return;
    }
    
    console.log(`🧭 Traitement de ${filename} (active: ${activePage})...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern pour identifier toutes les nav-link avec data-page
    const navLinkPattern = /<a href="([^"]+)" class="nav-link"([^>]*) data-page="([^"]+)"([^>]*)>([^<]+)<\/a>/g;
    
    let updatedContent = content.replace(navLinkPattern, (match, href, before, dataPage, after, text) => {
        // Nettoyer les classes existantes
        let classes = 'nav-link';
        
        // Ajouter 'active' si c'est la page courante
        if (dataPage === activePage) {
            classes += ' active';
        }
        
        return `<a href="${href}" class="${classes}"${before} data-page="${dataPage}"${after}>${text}</a>`;
    });
    
    // Vérifier si des changements ont été effectués
    if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`   ✅ Navigation mise à jour - ${activePage} marqué comme actif`);
    } else {
        console.log(`   ℹ️  Aucune modification nécessaire`);
    }
    
    console.log(`✅ ${filename} traité !`);
});

console.log('\n🎉 Correction terminée !');
console.log('📋 Résumé :');
console.log('• Fil d\'Ariane unifié sur toutes les pages');
console.log('• Classes "active" ajoutées sur les pages correspondantes');
console.log('• Navigation cohérente restaurée');