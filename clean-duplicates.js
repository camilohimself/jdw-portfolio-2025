#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Pages avec des doublons détectés
const pagesToClean = [
    'events.html',
    'gallery.html', 
    'media.html',
    'reflection.html'
];

console.log('🧹 NETTOYAGE DES DOUBLONS: Suppression des sections hero dupliquées...\n');

pagesToClean.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} n'existe pas, ignoré`);
        return;
    }
    
    console.log(`🧹 Nettoyage de ${filename}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Supprimer les sections hero dupliquées (garde seulement page-header)
    const heroSectionPattern = /\s*<!-- Hero Section -->\s*<section class="hero[^>]*>[^<]*<img[^>]*class="hero-background"[^>]*>[^<]*<div class="hero-overlay"><\/div>\s*<div class="hero-content">[\s\S]*?<\/div>\s*<\/section>/g;
    
    const beforeLength = content.length;
    content = content.replace(heroSectionPattern, '');
    const afterLength = content.length;
    
    if (beforeLength !== afterLength) {
        console.log(`   ✅ Section hero dupliquée supprimée (${beforeLength - afterLength} caractères)`);
    } else {
        console.log(`   ℹ️  Aucun doublon détecté`);
    }
    
    // Sauvegarder
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filename} nettoyé !`);
});

console.log('\n🎉 Nettoyage terminé !');
console.log('📋 Résumé :');
console.log('• Sections hero dupliquées supprimées');
console.log('• Structure page-header conservée');
console.log('• Contenu des pages préservé');