import smartpy as sp
class SmartLand(sp.Contract): 
    def __init__(self):
        self.init(titrefoncier = sp.big_map())  #definition du stockage liste de titre foncier'
                #definir les point d'entrer pour l'ajout d'titre foncier 
   

    # creer notre entry point pour l'objet terrain  
    @sp.entry_point
    def addterrain(self,params):
        sp.verify(params.idNumeroT !=sp.string(""),"Entrez un numero de titre foncier valide") #teste si le champ CNI est vide 

        sp.if  self.data.titrefoncier.contains(params.idNumeroT):
            sp.failwith("il existe")
        sp.else: 
            sp.verify(params.idCni !=sp.string("") ,"Entrez votre numero de CNI") #teste si le champ CNI est vide 
            #on declare les parametres du proprietaire
            sp.set_type(params.idCni, sp.TString)   
            sp.set_type(params.noms, sp.TString)
            sp.set_type(params.prenoms, sp.TString)
            sp.set_type(params.dateNaissance, sp.TString)
            sp.set_type(params.lieuNaissance, sp.TString)

            #on declare les parametres du terrain 
            sp.set_type(params.idNumeroT, sp.TString)   
            sp.set_type(params.local, sp.TString)
            sp.set_type(params.limite, sp.TString)
            sp.set_type(params.coordGeo, sp.TString)

            #on creer un objet ou seront ajoute les parametres du proprietaire
            Terrain = sp.record(idNumeroT=params.idNumeroT,
            local=params.local, limite=params.limite, 
            coordGeo=params.coordGeo,
            idCni=params.idCni,
            noms=params.noms, prenoms = params.prenoms, 
            dateNaissance=