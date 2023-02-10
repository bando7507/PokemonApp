import React from 'react';
import { Fade } from 'react-reveal';
import lolo from '../../assets/bg/sasha.png'
const ContentHome = () => {
    return (
        <section className='contentHome'>
            <Fade bottom>
                <h1 className='contentHome-head'><span>Le meilleur choix</span> pour vous informer</h1>
                <p className='contentHome-desc'>Que vous cherchiez des pokemons ou des caracteristque, vous trouverez la ressource idéale sur PRO.</p>
            </Fade>


            <div className='contentFlex'>
                <div className='contentLeft'>
                    <div className='contentLeft-content'>
                        <Fade bottom>
                            <i class='bx bx-star' ></i>
                            <div className='contentText'>
                                <h2>Contenu fiable de haute qualité</h2>
                                <p>Téléchargez des images accrocheuses de la meilleure qualité pour votre propre plaisir.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='contentLeft-content'>
                        <Fade bottom>
                            <i class='bx bx-like'></i>
                            <div className='contentText'>
                                <h2>Ressources prêtes à utiliser</h2>
                                <p>Accédez à des milliers d’images et d'information prêts à être utilisés.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='contentLeft-content'>
                        <Fade bottom>
                            <i class='bx bx-search'></i>
                            <div className='contentText'>
                                <h2>Résultats de recherche garantis</h2>
                                <p>Il existe un pokemon et un style pour tous les drésseur, quels que soient vos besoins.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='contentLeft-content'>
                        <Fade bottom>
                            <i class='bx bx-loader'></i>
                            <div className='contentText'>
                                <h2>Du nouveau contenu tous les jours</h2>
                                <p>Notre bibliothèque est mise à jour quotidiennement, pour que vous puissiez y trouver les pokemons et les information les plus récents.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="" />
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </div>
            </div>



            <Fade bottom>
                <div className="teams">
                    <div className='teamsLeft'>
                        <h1 className="teamsLeft-title">
                            Rejoignez la communauté des dresseurs Pokemon
                        </h1>
                        <p className="teamsLeft-desc">
                            Derrière chaque image de stock se cache un esprit créatif. Vous pouvez également créer du contenu et le vendre sur Freepik.
                        </p>
                    </div>
                    <div className='teamsRight'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png' alt="" />
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ContentHome;
