_oc=new DWObjectCode(0,4,11);
var _DWPub = new DWPublication(0,"Delaneys",true,1,false);
DWVariables.instance().initPublication(_DWPub,'SCORE',0, 'SCORE_VALUE',0, 'SCORE_VALUE_TOTAL',0, 'SCORE_VALUE_PERCENT',0, 'SCORE_CORRECT',0, 'SCORE_INCORRECT',0, 'SCORE_TOTAL',0, 'SCORE_PERCENT',0, 'SCORE_TOTAL_POSSIBLE',0, 'SCORE_TOTAL_QUESTIONS',0, 'SCORE_CURRENT_POSSIBLE',0, 'CHAPTER_PASSWORD',"", 'PUBLICATION_TIME',0, 'SYSTEM_TIME_YEAR',0, 'SYSTEM_TIME_MONTH',0, 'SYSTEM_TIME_DATE',0, 'SYSTEM_TIME_DAY',0, 'SYSTEM_TIME_HOUR',0, 'SYSTEM_TIME_MINUTE',0, 'SYSTEM_TIME_SECOND',0, 'SYSTEM_TIME_12HOUR',0, 'SYSTEM_TIME_AMPM',0, 'SYSTEM_DATE_FULL',"", 'SYSTEM_WIN_DIR',"", 'SYSTEM_WINSYS_DIR',"", 'SYSTEM_DOCUMENTS_DIR',"", 'SYSTEM_PROGRAMS_DIR',"", 'SYSTEM_PROGRAMDATA_DIR',"", 'SYSTEM_USERNAME',"", 'SYSTEM_PUBLICATION_DIR',"", 'SYSTEM_CD_DRIVE',"", 'SYSTEM_TEMP_DIR',"", 'PUBLICATION_TITLE',"", 'PUBLICATION_PAGE_TITLE',"", 'SYSTEM_COLOUR_DEPTH',0, 'SYSTEM_SCREEN_RES_X',0, 'SYSTEM_SCREEN_RES_Y',0, 'SYSTEM_OPERATING_SYS',0, 'SYSTEM_HAS_SOUND',"", 'LOGIN_USER_NAME',"", 'LOGIN_LEVEL_VALUE',"", 'LOGIN_LEVEL_NAME',"", 'LOGIN_FIRSTNAME',"", 'LOGIN_SURNAME',"", 'LOGIN_LEARNER_ID',"", 'LOGIN_TUTOR',"", 'LOGIN_DEPT',"", 'LOGIN_MANAGER',"", 'LOGIN_ORGANIZATION',"", 'LOGIN_USER_EMAIL',"", 'LOGIN_SCORE_EMAIL',"", 'USER_VOL',0, 'RADIO_GROUP_1_ID',-1, 'RADIO_GROUP_1_NAME',"", 'RADIO_GROUP_2_ID',-1, 'RADIO_GROUP_2_NAME',"", 'RADIO_GROUP_3_ID',-1, 'RADIO_GROUP_3_NAME',"", 'RADIO_GROUP_4_ID',-1, 'RADIO_GROUP_4_NAME',"", 'Q_SCORE_VALUE',0, 'Q_SCORE_VALUE_TOTAL',0, 'Q_SCORE_VALUE_PERCENT',0, 'Q_SCORE_CORRECT',0, 'Q_SCORE_INCORRECT',0, 'Q_SCORE_TOTAL',0, 'Q_SCORE_TOTAL_POSSIBLE',0, 'Q_SCORE_TOTAL_QUESTIONS',0, 'Q_SCORE_ANSWERED_QUESTIONS',0, 'Q_SCORE_CURRENT_POSSIBLE',0, 'Q_SCORE_VALUE_POSSIBLE',0, 'Q_SCORE_VALUE_TOTAL_REMAINING',0, 'Q_SCORE_OVERALL_PERCENT',0, 'Q_SCORE_COURSE_SUMMARY',"", 'Q_SCORE_PERCENT_POSSIBLE',0, 'Q_SCORE_COURSE_FINISHED',"", 'Q_SCORE_COURSE_PASSED',"", 'Q_COURSE_ADMINISTRATOR',"", 'Q_COURSE_ADMINISTRATOR_EMAIL',"", 'Q_TOPIC_NAME',new Object, 'Q_TOPIC_PASS_VALUE',new Object, 'Q_TOPIC_CRITICAL_PASS',new Object, 'Q_TOPIC_CURRENT_VALUE',new Object, 'Q_TOPIC_CURRENT_PERCENT',new Object, 'Q_TOPIC_CURRENT_POSSIBLE',new Object, 'Q_TOPIC_TOTAL_POSSIBLE',new Object, 'Q_TOPIC_CORRECT',new Object, 'Q_TOPIC_INCORRECT',new Object, 'Q_TOPIC_ANSWERED_QUESTIONS',new Object, 'Q_TOPIC_TOTAL_QUESTIONS',new Object, 'Q_TOPIC_VALUE_TOTAL_REMAINING',new Object, 'Q_TOPIC_OVERALL_PERCENT',new Object, 'Q_TOPIC_PASSED',new Object, 'Q_TOPIC_FINISHED',new Object);
if(true){var topics = new Array(1);topics[0] = new DWCBTTopic('Topic 1', 100.000000, true, false);DWCBTManager.instance().initialise(topics, '', '', '');}
var Year_of_the_Delaney = new DWChapter();
Year_of_the_Delaney.setObjectCode(new DWObjectCode(0,2,1));
_DWPub.addChild(Year_of_the_Delaney);
_DWPub.Stannaway=Stannaway=new DWPage('Stannaway',_oc,720,1280,1024,768,2147483647,2147483647,true,0,false);
Year_of_the_Delaney.addChild(Stannaway);
_c=new DWColour(255,255,255,1.0);
_oc1=new DWObjectCode(1,3,2);
_oc2=new DWObjectCode(1,10,4);
_c1=new DWColour(0,0,0,0.5);
_c2=new DWColour(0,101,148,0.5);
_pp=['M',0.000,-65.000,'C',33.000,-65.000,60.000,-35.750,60.000,0.000,'C',60.000,35.750,33.000,65.000,0.000,65.000,'C',-33.000,65.000,-60.000,35.750,-60.000,0.000,'C',-60.000,-35.750,-33.000,-65.000,0.000,-65.000,'L',0.000,-65.000];
var _br=new DWSolidBrush(_c1);
var _pn=new DWPen(_c2,4.0,2,2,0.0);
var _pl=new DWPolygon(_br,_pn,null,_pp);
_oc3=new DWObjectCode(2,0,1);
_oc4=new DWObjectCode(1,10,5);
_oc5=new DWObjectCode(2,0,2);
_oc6=new DWObjectCode(1,10,6);
_oc7=new DWObjectCode(2,0,3);
_oc8=new DWObjectCode(1,10,7);
_oc9=new DWObjectCode(2,0,4);
_oc10=new DWObjectCode(1,10,8);
_oc11=new DWObjectCode(2,0,5);
_oc12=new DWObjectCode(1,10,9);
_oc13=new DWObjectCode(2,0,6);
_oc14=new DWObjectCode(1,10,10);
_oc15=new DWObjectCode(2,0,7);
_oc16=new DWObjectCode(1,4,14);
tr=new DWRevealTransition(1000,true).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
_oc17=new DWObjectCode(1,4,15);
_oc18=new DWObjectCode(1,4,16);
_oc19=new DWObjectCode(1,4,17);
_oc20=new DWObjectCode(1,4,18);
_oc21=new DWObjectCode(1,4,19);
_oc22=new DWObjectCode(1,4,20);
_oc23=new DWObjectCode(1,3,1);
_c3=new DWColour(0,0,0,0.7);
_oc24=new DWObjectCode(1,4,21);
tr1=new DWRevealTransition(1000,false).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
_oc25=new DWObjectCode(1,4,22);
_oc26=new DWObjectCode(1,4,23);
_oc27=new DWObjectCode(1,4,24);
_oc28=new DWObjectCode(1,4,25);
_oc29=new DWObjectCode(1,4,26);
_oc30=new DWObjectCode(1,4,27);
_oc31=new DWObjectCode(1,4,29);

Stannaway.init('StannawayD',function(){var p = this;p.Image_2=new DWImage('Image_2D',_oc1,'Image 2',359.5,998.0,695,480);
p.Martina=new DWVector('MartinaD',_oc2,'Martina',352.0,87.0,124,134);
p.Tiger_ogg=new DWAudio(_oc3);
p.Pauline=new DWVector('PaulineD',_oc4,'Pauline',142.0,283.0,124,134);
p.dog_ogg=new DWAudio(_oc5);
p.Charles=new DWVector('CharlesD',_oc6,'Charles',598.0,443.0,124,134);
p.Sheep_ogg=new DWAudio(_oc7);
p.Ellen=new DWVector('EllenD',_oc8,'Ellen',352.0,407.0,124,134);
p.monkey_ogg=new DWAudio(_oc9);
p.MrsD=new DWVector('MrsDD',_oc10,'MrsD',112.0,443.0,124,134);
p.rabbit_ogg=new DWAudio(_oc11);
p.Ann=new DWVector('AnnD',_oc12,'Ann',578.0,277.0,124,134);
p.ox_ogg=new DWAudio(_oc13);
p.Ger=new DWVector('GerD',_oc14,'Ger',358.0,253.0,124,134);
p.pig_ogg=new DWAudio(_oc15);
p.Martina__2_=new DWText('Martina__2_D',_oc16,'Martina (2)',490.0,75.0,140,70);
p.Pauline__2_=new DWText('Pauline__2_D',_oc17,'Pauline (2)',155.0,185.0,150,70);
p.Charles__2_=new DWText('Charles__2_D',_oc18,'Charles (2)',610.0,555.0,140,70);
p.Ellen__2_=new DWText('Ellen__2_D',_oc19,'Ellen (2)',360.0,525.0,140,70);
p.MrsD__2_=new DWText('MrsD__2_D',_oc20,'MrsD (2)',105.0,565.0,170,70);
p.Ann__2_=new DWText('Ann__2_D',_oc21,'Ann (2)',595.0,175.0,150,70);
p.Ger__2_=new DWText('Ger__2_D',_oc22,'Ger (2)',360.0,165.0,140,70);
p.Zodiac=new DWImage('ZodiacD',_oc23,'Zodiac',368.0,990.0,304,240);
p.Dog=new DWText('DogD',_oc24,'Dog',372.5,980.5,575,401);
p.Tiger=new DWText('TigerD',_oc25,'Tiger',372.5,980.5,575,401);
p.Pig=new DWText('PigD',_oc26,'Pig',372.5,980.5,575,401);
p.Ox=new DWText('OxD',_oc27,'Ox',372.5,980.5,575,401);
p.Rabbit=new DWText('RabbitD',_oc28,'Rabbit',372.5,980.5,575,401);
p.Monkey=new DWText('MonkeyD',_oc29,'Monkey',372.5,980.5,575,401);
p.Sheep=new DWText('SheepD',_oc30,'Sheep',372.5,980.5,575,401);
p.PhotoClick=new DWText('PhotoClickD',_oc31,'PhotoClick',360.0,700.0,680,40);
p.Martina.addPolygons(0,null,0,_pl);
p.Martina.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.Tiger_ogg), 
			new DWSimpleAction(p.Martina__2_.showAction.bind(p.Martina__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Sheep.hideAction.bind(p.Sheep,null)),new DWSimpleAction(p.Monkey.hideAction.bind(p.Monkey,null)),new DWSimpleAction(p.Rabbit.hideAction.bind(p.Rabbit,null)),new DWSimpleAction(p.Ox.hideAction.bind(p.Ox,null)),new DWSimpleAction(p.Pig.hideAction.bind(p.Pig,null)),new DWSimpleAction(p.Dog.hideAction.bind(p.Dog,null)))), 
			new DWSimpleAction(p.Tiger.showAction.bind(p.Tiger,null))
		)
	)
));
p.Tiger_ogg.addResource('Tiger.mp3','audio/mpeg;codecs="mp3"').addResource('Tiger.ogg','audio/ogg;codecs="vorbis"');
p.Martina.addChildren(p.Tiger_ogg);
p.Martina.setIgnoreTransparentArea(true);
p.Pauline.addPolygons(0,null,0,_pl);
p.Pauline.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.dog_ogg), 
			new DWSimpleAction(p.Pauline__2_.showAction.bind(p.Pauline__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Sheep.hideAction.bind(p.Sheep,null)),new DWSimpleAction(p.Monkey.hideAction.bind(p.Monkey,null)),new DWSimpleAction(p.Rabbit.hideAction.bind(p.Rabbit,null)),new DWSimpleAction(p.Ox.hideAction.bind(p.Ox,null)),new DWSimpleAction(p.Pig.hideAction.bind(p.Pig,null)),new DWSimpleAction(p.Tiger.hideAction.bind(p.Tiger,null)))), 
			new DWSimpleAction(p.Dog.showAction.bind(p.Dog,null))
		)
	)
));
p.dog_ogg.addResource('dog.mp3','audio/mpeg;codecs="mp3"').addResource('dog.ogg','audio/ogg;codecs="vorbis"');
p.Pauline.addChildren(p.dog_ogg);
p.Pauline.setIgnoreTransparentArea(true);
p.Charles.addPolygons(0,null,0,_pl);
p.Charles.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.Sheep_ogg), 
			new DWSimpleAction(p.Charles__2_.showAction.bind(p.Charles__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Monkey.hideAction.bind(p.Monkey,null)),new DWSimpleAction(p.Rabbit.hideAction.bind(p.Rabbit,null)),new DWSimpleAction(p.Ox.hideAction.bind(p.Ox,null)),new DWSimpleAction(p.Pig.hideAction.bind(p.Pig,null)),new DWSimpleAction(p.Tiger.hideAction.bind(p.Tiger,null)),new DWSimpleAction(p.Dog.hideAction.bind(p.Dog,null)))), 
			new DWSimpleAction(p.Sheep.showAction.bind(p.Sheep,null))
		)
	)
));
p.Sheep_ogg.addResource('Sheep.mp3','audio/mpeg;codecs="mp3"').addResource('Sheep.ogg','audio/ogg;codecs="vorbis"');
p.Charles.addChildren(p.Sheep_ogg);
p.Charles.setIgnoreTransparentArea(true);
p.Ellen.addPolygons(0,null,0,_pl);
p.Ellen.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.monkey_ogg), 
			new DWSimpleAction(p.Ellen__2_.showAction.bind(p.Ellen__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Sheep.hideAction.bind(p.Sheep,null)),new DWSimpleAction(p.Rabbit.hideAction.bind(p.Rabbit,null)),new DWSimpleAction(p.Ox.hideAction.bind(p.Ox,null)),new DWSimpleAction(p.Pig.hideAction.bind(p.Pig,null)),new DWSimpleAction(p.Tiger.hideAction.bind(p.Tiger,null)),new DWSimpleAction(p.Dog.hideAction.bind(p.Dog,null)))), 
			new DWSimpleAction(p.Monkey.showAction.bind(p.Monkey,null))
		)
	)
));
p.monkey_ogg.addResource('monkey.mp3','audio/mpeg;codecs="mp3"').addResource('monkey.ogg','audio/ogg;codecs="vorbis"');
p.Ellen.addChildren(p.monkey_ogg);
p.Ellen.setIgnoreTransparentArea(true);
p.MrsD.addPolygons(0,null,0,_pl);
p.MrsD.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.rabbit_ogg), 
			new DWSimpleAction(p.MrsD__2_.showAction.bind(p.MrsD__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Sheep.hideAction.bind(p.Sheep,null)),new DWSimpleAction(p.Monkey.hideAction.bind(p.Monkey,null)),new DWSimpleAction(p.Ox.hideAction.bind(p.Ox,null)),new DWSimpleAction(p.Pig.hideAction.bind(p.Pig,null)),new DWSimpleAction(p.Tiger.hideAction.bind(p.Tiger,null)),new DWSimpleAction(p.Dog.hideAction.bind(p.Dog,null)))), 
			new DWSimpleAction(p.Rabbit.showAction.bind(p.Rabbit,null))
		)
	)
));
p.rabbit_ogg.addResource('rabbit.mp3','audio/mpeg;codecs="mp3"').addResource('rabbit.ogg','audio/ogg;codecs="vorbis"');
p.MrsD.addChildren(p.rabbit_ogg);
p.MrsD.setIgnoreTransparentArea(true);
p.Ann.addPolygons(0,null,0,_pl);
p.Ann.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.ox_ogg), 
			new DWSimpleAction(p.Ann__2_.showAction.bind(p.Ann__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Sheep.hideAction.bind(p.Sheep,null)),new DWSimpleAction(p.Monkey.hideAction.bind(p.Monkey,null)),new DWSimpleAction(p.Rabbit.hideAction.bind(p.Rabbit,null)),new DWSimpleAction(p.Pig.hideAction.bind(p.Pig,null)),new DWSimpleAction(p.Tiger.hideAction.bind(p.Tiger,null)),new DWSimpleAction(p.Dog.hideAction.bind(p.Dog,null)))), 
			new DWSimpleAction(p.Ox.showAction.bind(p.Ox,null))
		)
	)
));
p.ox_ogg.addResource('ox.mp3','audio/mpeg;codecs="mp3"').addResource('ox.ogg','audio/ogg;codecs="vorbis"');
p.Ann.addChildren(p.ox_ogg);
p.Ann.setIgnoreTransparentArea(true);
p.Ger.addPolygons(0,null,0,_pl);
p.Ger.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.pig_ogg), 
			new DWSimpleAction(p.Ger__2_.showAction.bind(p.Ger__2_,null)), 
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Sheep.hideAction.bind(p.Sheep,null)),new DWSimpleAction(p.Monkey.hideAction.bind(p.Monkey,null)),new DWSimpleAction(p.Rabbit.hideAction.bind(p.Rabbit,null)),new DWSimpleAction(p.Ox.hideAction.bind(p.Ox,null)),new DWSimpleAction(p.Tiger.hideAction.bind(p.Tiger,null)),new DWSimpleAction(p.Dog.hideAction.bind(p.Dog,null)))), 
			new DWSimpleAction(p.Pig.showAction.bind(p.Pig,null))
		)
	)
));
p.pig_ogg.addResource('pig.mp3','audio/mpeg;codecs="mp3"').addResource('pig.ogg','audio/ogg;codecs="vorbis"');
p.Ger.addChildren(p.pig_ogg);
p.Ger.setIgnoreTransparentArea(true);
p.Martina__2_.setHideTransition(tr);
p.Martina__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 );
p.Pauline__2_.setHideTransition(tr);
p.Pauline__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 );
p.Charles__2_.setHideTransition(tr);
p.Charles__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 );
p.Ellen__2_.setHideTransition(tr);
p.Ellen__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 );
p.MrsD__2_.setHideTransition(tr);
p.MrsD__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 ).setInitialEffectsTransforms( 0.00, 1.00, 1.00, 0.00, 0.00 );
p.Ann__2_.setHideTransition(tr);
p.Ann__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 );
p.Ger__2_.setHideTransition(tr);
p.Ger__2_.setInitiallyHidden( true, -1 ).setShowFor( 1000 );
p.Dog.setShowTransition(tr1);
p.Dog.setInitiallyHidden( true, -1 );
p.Tiger.setShowTransition(tr1);
p.Tiger.setInitiallyHidden( true, -1 );
p.Pig.setShowTransition(tr1);
p.Pig.setInitiallyHidden( true, -1 );
p.Ox.setShowTransition(tr1);
p.Ox.setInitiallyHidden( true, -1 );
p.Rabbit.setShowTransition(tr1);
p.Rabbit.setInitiallyHidden( true, -1 );
p.Monkey.setShowTransition(tr1);
p.Monkey.setInitiallyHidden( true, -1 );
p.Sheep.setShowTransition(tr1);
p.Sheep.setInitiallyHidden( true, -1 );
Stannaway.addChildren(p.Image_2,p.Martina,p.Pauline,p.Charles,p.Ellen,p.MrsD,p.Ann,p.Ger,p.Martina__2_,p.Pauline__2_,p.Charles__2_,p.Ellen__2_,p.MrsD__2_,p.Ann__2_,p.Ger__2_,p.Zodiac,p.Dog,p.Tiger,p.Pig,p.Ox,p.Rabbit,p.Monkey,p.Sheep,p.PhotoClick);
});_DWPub.setCurrentPage(Stannaway);
window.onload=_DWPub.start.bind(_DWPub);
window.onunload=function(){};
