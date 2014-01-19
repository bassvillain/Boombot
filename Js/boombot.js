/*
 Copyright (c) 2013-2014 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 
 
 * NOTE:  PLEASE CONTACT DJ-NEON FOR THIS SCRIPT (DO NOT CHANGE ANYTHING ON THIS SCRIPT OR USE THIS SCRIPT WHICH
 * WAS WRITTEN BY IT'S RIGHTFUL OWNER: DJ NOEN)
 *
 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 * @Member:    Ricardo Soares - bassvillain (Owner. of TheBoomBox)
 *
 */
 
 
 
var boombot = {};
var ruleSkip = {};
boombot.misc = {};
boombot.settings = {};
boombot.moderators = {};
boombot.filters = {};
botMethods = {};
boombot.pubVars = {};
 
toSave = {};
toSave.settings = boombot.settings;
toSave.moderators = boombot.moderators;
 
boombot.misc.version = "1.0.19";
boombot.misc.origin = "This bot was created by bassvillain and Neon alone, and it is copyrighted!";
boombot.misc.changelog = "Added a secondary check for history";
boombot.misc.ready = true;
boombot.misc.lockSkipping = false;
boombot.misc.lockSkipped = "0";
boombot.misc.tacos = new Array();
var songBoundary = 60 * 7;
var announcementTick = 60 * 7;
var lastAnnouncement = 0;

 
joined = new Date().getTime();
 
cancel = false;
 
boombot.filters.swearWords = new Array();
boombot.filters.commandWords = new Array();
boombot.filters.racistWords = new Array();
boombot.filters.beggerWords = new Array();
 
boombot.settings.maxLength = 10; //minutes
boombot.settings.cooldown = 10; //seconds
boombot.settings.staffMeansAccess = true;
boombot.settings.historyFilter = true;
boombot.settings.swearFilter = false;
boombot.settings.commandFilter = true;
boombot.settings.racismFilter = false;
boombot.settings.beggerFilter = true;
boombot.settings.interactive = true;
boombot.settings.removedFilter = true;
 
//Admins                [Dj-Neon-TFL]               [bassvillain]
boombot.admins = ["50aeaeb6c3b97a2cb4c25bd2","50aeaeb8d6e4a94f77470a11"];
 
boombot.filters.swearWords = ["slut","mofo","penis","penus","fuck","shit","bitch","cunt","twat","faggot","queer","dumb ass","pussy","dick","cocksucker","asshole","vagina","tit","mangina","tits","cock","jerk","puta","puto","cum","sperm","ass-hat","ass-jabber","assbanger","assfuck","assfucker","assnigger","butt plug","bollox","blowJob","Blow job","bampot","cameltoe","chode","clitfuck","cunt","cracker","dildo","douche","doochbag","dike","dyke","fatass","fat ass","fuckass","fuckbag","fuckboy","fuckbrain","gay","gaylord","handjob","hoe","Jizz","jerk off","kunt","lesbian","lesbo","lezzie","minge","munging","nut sack","nutsack","queer","queef","rimjob","scrote","schlong","titfuck","twat","unclefucker","va-j-j","vajayjay","vjayjay","wankjob","whore"];
 
boombot.filters.commandWords = ["!status",".changelog",".say",".catfact",".dogfact",".fortune",".songlink",".down",".join",".status",".tcf",".cf",".rules",".version",".test"];
 
boombot.filters.racistWords = ["nigger","kike","spick","porchmonkey","camel jockey","towelhead","towel head","chink","gook","porch monkey","cracker","Coolie","nigga","nigguh","black shit","black monkey","you ape","you monkey","you gorilla","black ass","assnigger","honkey","White bread","white ass","jungle bunny","niglet","nigaboo","paki","ruski","sand nigger","sandnigger","wetback","wet back"];
 
boombot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","need fan","more fan","fan back","give me fans","gimme fans"];
 


var announcements = [
""
];



var blockedSongs = [
    "Rick Roll",
    "GANGNAM",
    "The Fox",
    "The Fox [Official music video HD]",
    "10 hour"
];
 
var blockedArtists = [
    "Rick Astley",
    "Miley Cyrus",
    "Justin bieber",
    "Rebbeca black",
    "2pac",
    "Wiz Khalifa",
    "Lil Wayne",
    "Drake",
    "2 Chainz",
    "2Chainz",
    "Canuco Zumby",
];


boombot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
 
boombot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake"];

boombot.misc.ball = [
" It is certain",
" It is decidedly so",
" Without a doubt",
" Yes definitely",
" You may rely on it",
" As I see it yes",
" Most likely",
" Outlook good",
" Yes",
" Signs point to yes :trollface:",
" Reply hazy try again",
" Ask again later",
" Better not tell you now",
" Cannot predict now",
" Concentrate and ask again",
" Don't count on it",
" My reply is no",
" My sources say no",
" Outlook not so good",
" Very doubtful"];
 
boombot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2. Bummer :(",
"You rolled A 3. Bummer :("];

boombot.misc.roll2 = [
"4. Awesome!",
"5. Awesome!",
"6. Awesome!"];
 
boombot.misc.catfact = ["Cats have five toes on each front paw, but only four toes on each back paw.","Cats have true fur, in that they have both an undercoat and an outer coat.",
"Newborn kittens have closed ear canals that don''t begin to open for nine days.When the eyes open, they are always blue at first. They change color over a period of months to the final eye color.",
"Most cats have no eyelashes.","A cat cannot see directly under its nose.",
"You can tell a cat's mood by looking into its eyes. A frightened or excited cat will have large, round pupils. An angry cat will have narrow pupils. The pupil size is related as much to the cat's emotions as to the degree of light.",
"It is a common belief that cats are color blind. However, recent studies have shown that cats can see blue, green and red.",
"A cat can jump even seven times as high as it is tall.",
"The cat's footpads absorb the shocks of the landing when the cat jumps.",
"A cat is pregnant for about 58-65 days.",
"When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
"Neutering a cat extends its life span by two or three years.",
"Cats can't taste sweets.",
"Cats must have fat in their diet because they can't produce it on their own.",
"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
"Tylenol and chocolate are both poisonous to cats.",
"The average cat food meal is the equivalent to about five mice.",
"Cats have AB blood groups just like people.",
"The color of the points in Siamese cats is heat related. Cool areas are darker.",
"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
"Today there are about 100 distinct breeds of the domestic cat.",
"The first cat show was in 1871 at the Crystal Palace in London.",
"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
"In ancient Egypt, killing a cat was a crime punishable by death.",
"The ancestor of all domestic cats is the African Wild Cat which still exists today.",
"Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
"Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
"Julius Caesar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
"Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
"Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
"Jaguars are the only big cats that don't roar.",
"A cat's field of vision is about 185 degrees.",
"The Maine Coon is 4 to 5 times larger than the Cingapura, the smallest breed of cat.",
"Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
"A cat can sprint at about thirty-one miles per hour.",
"A cat can spend five or more hours a day grooming themselves.",
"The cat has been living in close association with humans for somewhere between 3,500 and 8,000 years.",
"The domestic house cat is a small carnivorous mammal. Its most immediate ancestor is believed to be the African wild cat.",
"Cats usually weigh between 2.5 and 7 kg (5.5–16 pounds), although some breeds can exceed 11.3 kg (25 pounds).",
"Domestic cats tend to live longer if they are not permitted to go outdoors.",
"Cats, in some cases, can sleep as much as 20 hours in a 24-hour period. The term cat nap refers to the cat's ability to fall asleep (lightly) for a brief period.",
"Cats dislike citrus scent.",
"A cat's tongue has tiny barbs on it.",
"Cats can be right-pawed or left-pawed.",
"It has been scientifically proven that stroking a cat can lower one's blood pressure.",
"Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible."];
 
boombot.misc.dogfact = [
"Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.",
"It’s rumored that, at the end of the Beatles song, A Day in the Life, Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.",
"Puppies have 28 teeth and normal adult dogs have 42.",
"Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.",
"Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
"Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming",
"Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark.",
"A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute.",
"According to a petfinder.com - Press poll, 72% of dog owners believe their dog can detect when stormy weather is on the way.",
"A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit.",
"Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet.",
"Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or “haw,” which helps keep the eye moist and protected.",
"Americans love dogs! 62% of U.S. households own a pet, which equates to 72.9 million homes",
"45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hogs the blankets!)",
"Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth.",
"Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473.",
"A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans.",
"It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray.",
"Sound frequency is measured in Hertz (Hz). The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz.",
"Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements.",
"While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.",
"When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory.",
"Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators.",
"Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.",
"Some stray Russian dogs have figured out how to use the subway system in order to travel to more populated areas in search of food.",
"Dogs don’t enjoy being hugged as much as humans and other primates.",
"Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers.",
"Service dogs are trained to know when they are on duty. When their harness is on, they know it’s business time. When you take it off, the pups immediately become playful and energetic.",
"Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
"Seeing eye dogs pee and poo on command so that their owners can clean up after them."];
 
boombot.misc.fortune = [
" There is a true and sincere friendship between you and your friends.",
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" You will be invited to an exciting event."];
 
 
boombot.pubVars.skipOnExceed;
boombot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
 
API.on(API.DJ_ADVANCE, djAdvanceEvent);
 
API.on(API.USER_JOIN, UserJoin);
function UserJoin(user)
{
var JoinMsg = ["Yo waddup @user","Sup yo! @user","Welcome to The Boombox mate! @user","Aye mate! @user","Yo @user"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("user", user.username) + " ~ Read the rules and have fun!");
}
 
API.on(API.VOTE_SKIP, SKIP);
function SKIP() {
var SkipMsg = ["Yo man don't play the shitty music again","HaHa! My nigguh got skipped XD","Thank God bruh! Couldn't stand that ugly asz song"];
API.sendChat(SkipMsg[Math.floor(Math.random() * SkipMsg.length)]);
}
 
API.on(API.DJ_ADVANCE, listener);
window.setInterval(sendAnnouncement, 1000 * announcementTick);
 
API.on(API.CURATE_UPDATE, curated);
function curated(obj)
{
var media = API.getMedia();
API.sendChat(obj.user.username + " Added this song!");
}

function djAdvanceEvent(data){
    setTimeout(function(){ botMethods.data }, 500);
}

botMethods.skip = function(){
    setTimeout(function(){
        if(!cancel) API.moderateForceSkip();
    }, 3500);
};
 
botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("boombotSave"));
    boombot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("boombotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("boombotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};
 
function listener(data)
{
    if (data == null)
    {
        return;
    }
 
    var title = data.media.title;
    var author = data.media.author;
    for (var i = 0; i < blockedSongs.length; i++)
    {
        if (title.indexOf(blockedSongs[i]) != -1 || author.indexOf(blockedArtists[i]) != -1)
        {
            API.moderateForceSkip();
            chatMe("I Skipped: \"" + title + "\" because it is blocked.");
            return;
        }
    }
 
    var songLenRaw = $("#time-remaining-value").text();
    var songLenParts = songLenRaw.split(":");
    var songLen = (parseInt(songLenParts[0].substring(1)) * 60) + parseInt(songLenParts[1]);
    if (songLen >= songBoundary)
    {
        window.setTimeout(skipLongSong, 1000 * songBoundary);
    }
}
 
function skipLongSong()
{
    API.moderateForceSkip();
    chatMe("Skipping song because it has exceeded the song limit (" + (songBoundary / 60) + " minutes.)");
}
 
function sendAnnouncement()
{
        if (lastAnnouncement++ >= announcements.length - 1)
        {
                lastAnnouncement = 0;
        }
    chatMe(announcements[lastAnnouncement]);
}
 
function chatMe(msg)
{
        API.sendChat(msg);
}
 
botMethods.getID = function(username){
    var users = API.getUsers();
    var result = "";
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            result = users[i].id;
            return result;
        }
    }
 
    return "notFound";
};
 
botMethods.cleanString = function(string){
    return string.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
 
botMethods.djAdvanceEvent = function(data){
    clearTimeout(mubBot.pubVars.skipOnExceed);
    if(boombot.misc.lockSkipping){
        API.moderateAddDJ(mubBot.misc.lockSkipped);
        boombot.misc.lockSkipped = "0";
        boombot.misc.lockSkipping = false;
        setTimeout(function(){ API.moderateRoomProps(false, true); }, 500);
    }
    var song = API.getMedia();
    if(botMethods.checkHistory() > 0 && boombot.settings.historyFilter){
        if(API.getUser().permission < 2){
            API.sendChat("This song is in the history! You should make me a mod so that I could skip it!");
        }else if(API.getUser().permission > 1){
            API.sendChat("@" + API.getDJ().username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
            API.moderateForceSkip();
        }else if(song.duration > boombot.settings.maxLength * 60){
            boombot.pubVars.skipOnExceed = setTimeout( function(){
                API.sendChat("@"+ API.getDJ().username +" You have now played for as long as this room allows, time to let someone else have the booth!");
                API.moderateForceSkip();
            }, boombot.settings.maxLength * 60000);
            API.sendChat("@"+ API.getDJ().username +" This song will be skipped " + boombot.settings.maxLength + " minutes from now because it exceeds the max song length.");
        }else{
            setTimeout(function(){
                if(botMethods.checkHistory() > 0 && boombot.settings.historyFilter){
                    API.sendChat("@" + API.getDJ().username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
                    API.moderateForceSkip();
                };
            }, 1500);
        }
    }
};
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1 || API.getUser(fromID).permission < 2){
                switch(command[0].toLowerCase()){
 
                    case "votes":
                        if(API.getUser(fromID).permission < 2 || boombot.admins.indexOf(fromID) > -1){
                            API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :purple_heart: " + API.getRoomScore().curates+" | :-1: " + API.getRoomScore().negative);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                    
                    case "flipcoin":
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1){
                        var FlipMsg = ["My magic coins says: Tails", "My magic coin says: Heads"];
                            API.sendChat("@"+ data.from +" "+FlipMsg[Math.floor(Math.random() * FlipMsg.length)]);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "djinfo":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            var total = + API.getDJ().djPoints + API.getDJ().listenerPoints + API.getDJ().curatorPoints;
                            API.sendChat("Current dj is: "+ API.getDJ().username +". Points: "+ total +" | Fans: "+API.getDJ().fans+" | Curated: "+ API.getDJ().curatorPoints +".");
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                         
                    case "fb":
                    case "facebook":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("Hey @"+ data.from +"! I bet you're cute or handsome! Join our facebook group here: http://goo.gl/YOQHB9 ~ Keep in Touch!");
                            boombot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "cs":
                    case "chillsunday":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("We're doing a themed day! It's Chill Sunday! Go grab your best chill out tracks and have fun!");
                            boombot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "ping":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" Pong!");
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "marco":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" POLO!");
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "rules":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Rules: 1) Don't replay a song on the room history. 2) If the song has more MEHs than WOOTs, you should skip it. 3) No auto-queue when away from keyboard.");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" 1) Don't replay a song on the room history. 2) If the song has more MEHs than WOOTs, you should skip it. 3) No auto-queue when away from keyboard.");
                        }else{
                            API.sendChat("Rules: 1) Don't replay a song on the room history. 2) If the song has more MEHs than WOOTs, you should skip it. 3) No auto-queue when away from keyboard.");
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "commands":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1){
                            API.sendChat(".{command} mention is included");
                            setTimeout(function(){
                            API.sendChat("rules | themes | help | whywoot | whymeh | wiki | linkin | fb | define | songlink | download | props | votes | djinfo | bot | ping | marco| fortune | 8ball | roll | hug | catfact | dogfact | flipcoin | props | slap");
                        }, 650);
                            setTimeout(function(){
                            API.sendChat("test | whoami | join | leave | woot | meh | skip | tcf | trf | thf | tsf | tbf | version | lock | unlock | lockskip | save | changelog | cancel | source | status | cooldown | maxlength");
                        }, 1000);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "whywoot":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "props":
                    case "bonus":
                    case "bigup":
                        if(typeof command[1] == "undefined"){
                        API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                        }
                        break;
                        
                    case "melimel":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("Error: Username not found.. Do you mean Matt-c?");
                            mubBot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "mattc":
                    case "matt-c":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("Error: Username not found.. Do you mean Melimel?");
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "bitchslap":
                    case "slap":
                        if(typeof command[1] == "undefined"){
                        API.sendChat("@"+ data.from +" just gave a huge slap to @"+ API.getDJ().username +" for playing this awful track!");
                        }
                        break;
                        
                    case "theme":
                    case "themes":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("Hey @"+ data.from +"! Normally we do sample sessions or chill/hardcore days, if you have any suggestions to a cool session please suggest it here: www.facebook.com/groups/plugboombox/ ~ Keep in Touch!");
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "whymeh":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "help":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Welcome to the boombox! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music. Most Hip Hip music allowed.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Welcome to the boombox! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music. Most Hip Hop music is allowed.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "wiki":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/Special:Random");
                        }else{
                            var r = data.message.substring(6).replace(g, "_");
                            $.getJSON("http://jsonp.appspot.com/?callback=?&url=" + escape("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&titles="+r.replace(g,"_")),
                                function(wikiData){
                                    if (!wikiData || !wikiData.query || !wikiData.query.pages);
                                        return API.sendChat("@"+data.from+" http://en.wikipedia.org/wiki/"+r+" (NOT GUARANTEED TO BE CORRECT)");
                                    if (wikiData.query.pages[-1]) {
                                        API.sendChat("@"+data.from+" article not found");
                                    }else{
                                        for (var i in wikiData.query.pages)
                                            // note: the #... is just to make the url look nicer
                                            return API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/?curid="+i+"#"+escape(wikiData.query.pages[i].title) );
                                    }
                                }
                            );
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "residentdj":
                    case "residentdjs":
                        if(boombot.admins.indexOf(fromID) > -1 || API.getStaff().permission > 2){
                            API.sendChat("Resident DJs have no moderation privileges but their name will appear in the chat the same color as the community staff.");
                         setTimeout(function(){
                            API.sendChat("This role is usually given to artists, promoters or friends of the Community Staff to make the person stand out from the crowd. Resident DJs can, however, join an empty DJ booth.");
                         }, 650);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "bouncer":
                    case "bouncers":
                        if(boombot.admins.indexOf(fromID) > -1 || API.getStaff().permission > 2){
                            API.sendChat("Bouncers are people you trust to maintain order in the community, and a community can have an unlimited number of Bouncers. They can add/remove DJs, force skip, ban people from the community and delete offensive chat messages.");
                         setTimeout(function(){
                            API.sendChat("Bouncers cannot create other bouncers.");
                         }, 650);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "manager":
                    case "managers":
                        if(boombot.admins.indexOf(fromID) > -1 || API.getStaff().permission > 3){
                            API.sendChat("There is currently a limit of 10 managers per community. Managers cannot add other managers; they can only add bouncers. Managers cannot change the community name or description, but they can change the community settings like disable/enable");
                            setTimeout(function(){
                            API.sendChat("The Wait List, toggle DJ cycling, etc.) and perform all the other moderation actions.");
                         }, 650);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "host":
                    case "hosts":
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("A Host is the person who created the community. Hosts can create co-hosts (up to 2 currently). Hosts and co-hosts have the same privileges except that co-hosts cannot create other co-hosts. Hosts and co-hosts can change the community name and");
                         setTimeout(function(){
                            API.sendChat("description, as well as the community rules and can perform all of the normal moderation actions such as force skip a DJ, ban a person from the community, delete inappropriate chat messages, and move people in the Wait List as well as add/remove them.");
                         }, 650);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "ba":
                    case "brandambassador":
                    case "ambassador":
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("Brand Ambassadors have all of the same abilities of Managers, except their privileges extend across all of the communities on plug.dj. Brand Ambassadors are a good resource for answering");
                         setTimeout(function(){
                            API.sendChat(" general questions you may have. Brand Ambassadors will have a green microphone next to their name in chat. They are there to assist you.");
                         }, 650);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "linkin":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                        var IdiotMsg = ["Dude wtf is wrong with you search that up yourself.","You sound stupid yo","What do i look like a porn bot?","What are you an idiot?"];
                            API.sendChat("@"+ data.from +" "+ IdiotMsg[Math.floor(Math.random() * IdiotMsg.length)]);
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "define":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Define what?!");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.from +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                        var IdiotMsg = ["Dude wtf is wrong with you search that up yourself.","You sound stupid yo","What do i look like a porn bot?","What are you an idiot?"];
                            API.sendChat("@"+ data.from +" "+ IdiotMsg[Math.floor(Math.random() * IdiotMsg.length)]);
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                }
            }
        }
    });
 
        API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                    case "say":
                    if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            }else{
                            API.sendChat(command[1]);
                        }
                    }
                        break;
                        
                    case "add":
                    if(API.getUser(data.fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            $(".icon-curate").click();
                            $($(".curate").children(".menu").children().children()[0]).mousedown();
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
 
                    case "skip":
                    if(API.getUser(data.fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateForceSkip()
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
 
                    case "unlock":
                        if(boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateLockWaitList(false);
                        }
                    }
                        break;
               
                    case "lock":
                        if(boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateLockWaitList(true);
                        }
                    }
                        break;
 
                    case "meh":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
 
                    case "woot":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("One woot coming up!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
                   
                    case "join":
                    case "stepup":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djJoin();
                        }
                    }
                        break;
 
                    case "leave":
                    case "down":
                    case "dive":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djLeave();
                        }
                    }
                        break;
               
                    case 'cancel':
                        cancel = true;
                        API.sendChat('AutoSkip cancelled');
                        break;
 
                    case "lockskip":
                        if(boombot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            API.moderateForceSkip();
                        setTimeout(function(){
                           API.moderateLockWaitList(false);
                        }, 650);
                        }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "test":
                        if(boombot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Test Successful");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "source":
                        if(boombot.admins.indexOf(fromID) > -1){
                            API.sendChat("Sup Admin "+ data.from +"! My source is located here: http://goo.gl/rYXMiG");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "historyfilter":
                    case "hf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1) boombot.settings.historyFilter ? API.sendChat("History filter is enabled") : API.sendChat("History filter is disabled");
                        botMethods.save();
                        break;
 
                    case "swearfilter":
                    case "sf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1) boombot.settings.swearFilter ? API.sendChat("Swearing filter is enabled") : API.sendChat("Swearing filter is disabled");
                        botMethods.save();
                        break;
 
                    case "commandfilter":
                    case "cf":
                        if(mubBot.admins.indexOf(fromID) > -1) boombot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;
 
                    case "racismfilter":
                    case "rf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1) boombot.settings.racismFilter ? API.sendChat("Racism filter is enabled") : API.sendChat("Racism filter is disabled");
                        botMethods.save();
                        break;
 
                    case "beggerfilter":
                    case "bf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1) boombot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
 
                    case "tsf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(boombot.settings.swearFilter){
                                boombot.settings.swearFilter = false;
                                API.sendChat("Bot will no longer filter swearing.");
                            }else{
                                boombot.settings.swearFilter = true;
                                API.sendChat("Bot will now filter swearing.");
                            }
                        }
                        botMethods.save();
                        break;
       
                    case "tcf":
                        if(boombot.admins.indexOf(fromID) > -1){
                            if(boombot.settings.commandFilter){
                                boombot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                boombot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "trf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(boombot.settings.racismFilter){
                                boombot.settings.racismFilter = false;
                                API.sendChat("Bot will no longer filter racism.");
                            }else{
                                boombot.settings.racismFilter = true;
                                API.sendChat("Bot will now filter racism.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "tbf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(boombot.settings.beggerFilter){
                                boombot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                boombot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "thf":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(boombot.settings.historyFilter){
                                boombot.settings.historyFilter = false;!
                                    API.sendChat("Bot will no longer skip songs that are in the room history.");
                            }else{
                                boombot.settings.historyFilter = true;
                                API.sendChat("Bot will now skip songs that are in the room history.");
                            }
                        }
                        botMethods.save();
                        break;
                 
                    case "version":
                        if(boombot.admins.indexOf(fromID) > -1){
                            API.sendChat("boombot version " + boombot.misc.version);
                            }else{
                                API.sendChat("This command requires Admins only!");
                            }
                        break;
 
                    case "origin":
                    case "author":
                    case "authors":
                    case "creator":
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                           API.sendChat(boombot.misc.origin);
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "status":
                        if(boombot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger filter: "+boombot.settings.beggerFilter;
                            response = response + " | Swear filter: "+boombot.settings.swearFilter;
                            response = response + " | Command filter: "+boombot.settings.commandFilter;
                            response = response + " | Racism filter: "+boombot.settings.racismFilter;
                            response = response + " | History filter: "+boombot.settings.historyFilter;
                            response = response + " | MaxLength: " + boombot.settings.maxLength + "m";
                            response = response + " | Cooldown: " + boombot.settings.cooldown + "s";
                            response = response + " | Removed Video Filter: "+ boombot.settings.removedFilter;
                            API.sendChat(response);
                        }
                        break;
 
                    case "cooldown":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(boombot.settings.cooldown != 0.0001){
                                    API.sendChat('Cooldown is '+boombot.settings.cooldown+' seconds');
                                }else{
                                    API.sendChat('Cooldown is disabled');
                                }
                            }else if(command[1] == "disable"){
                                boombot.settings.cooldown = 0.0001;
                                API.sendChat('Cooldown disabled');
                            }else{
                                boombot.settings.cooldown = command[1];
                                API.sendChat('New cooldown is '+boombot.settings.cooldown+' seconds');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "maxlength":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(boombot.settings.maxLength != 1e+50){
                                    API.sendChat('Maxlength is '+boombot.settings.maxLength+' minutes');
                                }else{
                                    API.sendChat('Maxlength is disabled');
                                }
                            }else if(command[1] == "disable"){
                                boombot.settings.maxLength = Infinity;
                                API.sendChat('Maxlength disabled');
                            }else{
                                boombot.settings.maxLength = command[1];
                                API.sendChat('New maxlength is '+boombot.settings.maxLength+' minutes');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "interactive":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            boombot.settings.interactive ? API.sendChat("Bot is interactive.") : API.sendChat("Bot is not interactive.");
                        }
                        break;
 
                    case "toggleinteractive":
                    case "ti":
                        if(API.getUser(fromID).permission > 1 || boombot.admins.indexOf(fromID) > -1){
                            if(boombot.settings.interactive){
                                boombot.settings.interactive = false;
                                API.sendChat("Bot will no longer interact.");
                            }else{
                                boombot.settings.interactive = true;
                                API.sendChat("Bot will now interact.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "save":
                        if(boombot.admins.indexOf(fromID) > -1){
                            botMethods.save();
                            API.sendChat("Settings saved.");
                        }else{
                             API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "changelog":
                        if(boombot.admins.indexOf(fromID) > -1){
                            API.sendChat("New in version " + boombot.misc.version + " - " + boombot.misc.changelog)
                        }else{
                             API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                }
            }
        }
    });
 
        API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
 
                case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * boombot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ boombot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * boombot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ boombot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
               
 
                case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * boombot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ boombot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ boombot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * boombot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ boombot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ boombot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * boombot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * boombot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                    case "reward":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * boombot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + boombot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + boombot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * boombot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+command[1]+", " + data.from + " has rewarded you with " + boombot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@"+command[1]+", " + data.from + " has rewarded you with " + boombot.misc.cookie[randomCookie] + ". Enjoy!");
                                    break;
                            }
                        }
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+crowd[randomUser].username+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" a big bear hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                        
                     case "beer":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hey kid want beer?");
                                    setTimeout(function(){
                                        API.sendChat("Gives :beer: to @"+crowd[randomUser].username);
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@"+crowd[randomUser].username+", take this cold one, to refresh your mind !");
                                    break;
                                case 2:
                                    API.sendChat("@"+crowd[randomUser].username+", quickly! Drink this liquid gold before I do!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hey kid want beer?");
                                    setTimeout(function(){
                                        API.sendChat("Gives :beer: to @"+command[1]);
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@"+command[1]+", take this cold one, to refresh your mind !");
                                    break;
                                case 2:
                                    API.sendChat("@"+command[1]+", quickly! Drink this liquid gold before I do!");
                                    break;
                            }
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;   
                        
 
                     case "dogfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDogfact = Math.floor(Math.random() * boombot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.dogfact[randomDogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.dogfact[randomDogfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDogfact = Math.floor(Math.random() * boombot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.dogfact[randomdogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.dogfact[randomDogfact]);
                                    break;
                           }
                        }
                        if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "catfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCatfact = Math.floor(Math.random() * mubBot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.catfact[randomCatfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCatfact = Math.floor(Math.random() * boombot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ boombot.misc.catfact[randomCatfact]);
                                    break;
                           }
                        }
                        if(boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            boombot.misc.ready = false;
                            setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
   
   API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID;
 
        for(var i = 0; i < boombot.filters.swearWords.length; i++){
            if(msg.indexOf(boombot.filters.swearWords[i].toLowerCase()) > -1 && boombot.settings.swearFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < boombot.filters.commandWords.length; i++){
            if(msg.indexOf(boombot.filters.commandWords[i].toLowerCase()) > -1 && boombot.settings.commandFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < boombot.filters.racistWords.length; i++){
            if(msg.indexOf(boombot.filters.racistWords[i].toLowerCase()) > -1 && boombot.settings.racismFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < boombot.filters.beggerWords.length; i++){
            if(msg.indexOf(boombot.filters.beggerWords[i].toLowerCase()) > -1 && boombot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
                responses = ["Good idea @{beggar}!  Don't earn your fans or anything thats so yesterday", "Guys @{beggar} asked us to fan him!  Lets all totally do it! ಠ_ಠ", "srsly @{beggar}? ಠ_ಠ", "@{beggar}.  Earning his fans the good old fashioned way.  Hard work and elbow grease.  A true american."];
                r = Math.floor(Math.random() * responses.length);
                API.sendChat(responses[r].replace("{beggar}", data.from));
            }
        }
 
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf(':eyeroll:') > -1){
                API.sendChat('/me ¬_¬');
                if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':notamused:') > -1){
                API.sendChat('/me ಠ_ಠ');
                if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':yuno:') > -1){
                API.sendChat('/me ლ(ಥ益ಥლ');
                if(boombot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
            }
            
        }
 
    });
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf('hello bot') !== -1 || msg.indexOf('bot hello') !== -1 || msg.indexOf('hi bot') !== -1 || msg.indexOf('bot hi') !== -1 || msg.indexOf('sup bot') !== -1 || msg.indexOf('bot sup') !== -1 || msg.indexOf('hey bot') !== -1 || msg.indexOf('bot hey') !== -1 || msg.indexOf('howdy bot') !== -1 || msg.indexOf('bot howdy') !== -1 || msg.indexOf('aye bot') !== -1 || msg.indexOf('yo bot') !== -1 || msg.indexOf('waddup bot') !== -1 || msg.indexOf('bot waddup') !== -1){
                var HelloMsg = ["Hey!","Oh hey there!","Good day sir!","Hi","Howdy!","Waddup!"];
                API.sendChat("@" + data.from + " " + HelloMsg[Math.floor(Math.random() * HelloMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
            
        }
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf("what are the rules") !== -1 || msg.indexOf("wat r the rules") !== -1 || msg.indexOf("whats the rules") !== -1){
                var RulesMsg = ["Rules: 1) Don't replay a song on the room history. 2) If the song has more MEHs than WOOTs, you should skip it. 3) No auto-queue when away from keyboard."];
                API.sendChat("@" + data.from + " " + RulesMsg[Math.floor(Math.random() * RulesMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
        }
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf("how are you bot") !== -1 || msg.indexOf("bot how are you") !== -1 || msg.indexOf("hru bot") !== -1 || msg.indexOf("bot hru") !== -1 || msg.indexOf("doing good bot?") !== -1 || msg.indexOf("bot doing good?") !== -1 || msg.indexOf("hows it going bot") !== -1 || msg.indexOf("bot how is it going") !== -1 || msg.indexOf("how you doing bot") !== -1 || msg.indexOf("bot how you doing") !== -1){
                var HRUMsg = ["I'm good thanks for asking :)","Doing great yo and yourself?","All Good Mate!","I'm good thanks for asking!","Yeee i'm cool and youself yo?"];
                API.sendChat("@" + data.from + " " + HRUMsg[Math.floor(Math.random() * HRUMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
        }
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf("ty bot") !== -1 || msg.indexOf("bot ty") !== -1 || msg.indexOf("thank you bot") !== -1 || msg.indexOf("bot thank you") !== -1 || msg.indexOf("thanks bot") !== -1 || msg.indexOf("bot thanks") !== -1 || msg.indexOf("thx bot") !== -1 || msg.indexOf("bot thx") !== -1){
                var TYMsg = ["You're welcome! :D","Your always welcome bro!","No prob man.."];
                API.sendChat("@" + data.from + " " + TYMsg[Math.floor(Math.random() * TYMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
        }
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf("ily bot") !== -1 || msg.indexOf("bot ily") !== -1 || msg.indexOf("i love you bot") !== -1 || msg.indexOf("bot i love you") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("bot i luv you") !== -1 || msg.indexOf("i luv u bot") !== -1 || msg.indexOf("bot i luv u") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("i love you more bot") !== -1){
                var LoveMsg = ["Fuck yeahh!! :D I love you too baby!","I love you too ;).....   Sex?... JK you don't want this big thing ;)","I love you too o.0","Sweet.. Love you to ;)"];
                API.sendChat("@" + data.from + " " + LoveMsg[Math.floor(Math.random() * LoveMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
        }
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf("fuck you bot") !== -1 || msg.indexOf("bot fuck you") !== -1 || msg.indexOf("f u bot") !== -1 || msg.indexOf("bot f u") !== -1 || msg.indexOf("fuhk yuh bot") !== -1 || msg.indexOf("bot fuhk you") !== -1){
                var FuckMsg = ["Nah.. I don't need another fuck after giving your mom one last night.","</input fuck> Jk... Fuck you too","< Test fuck >.. Sorry 0% fucks were given by me."];
                API.sendChat("@" + data.from + " " + FuckMsg[Math.floor(Math.random() * FuckMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
        }        
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
            if(msg.indexOf("son of a bitch bot") !== -1 || msg.indexOf("bot son of a bitch") !== -1 || msg.indexOf("soab bot") !== -1 || msg.indexOf("bot soab") !== -1 || msg.indexOf("son of a biatch bot") !== -1 || msg.indexOf("bot son of a biatch") !== -1){
                var FuckMsg = ["Nah.. Actually im the son of Bender.","What you just said you no-good, rat-bastard human, die in a fire. :)","< Test fuck >.. Sorry 0% fucks were given by me.","http://stream1.gifsoup.com/webroot/animatedgifs/980837_o.gif"];
                API.sendChat("@" + data.from + " " + FuckMsg[Math.floor(Math.random() * FuckMsg.length)]);
                    boombot.misc.ready = false;
                    setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
                }
        }
        
    });
    
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.rule ') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
        if(boombot.misc.ready || boombot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[1]){
                    case '1':
                        API.sendChat("1) Don't replay a song on the room history.");
                        break;
                    case '2':
                        API.sendChat("2) If the song has more MEHs than WOOTs, you should skip it.");
                        break;
                    case '3':
                        API.sendChat("3) No auto-queue when away from keyboard.");
                        break;
                    default:
                        API.sendChat("You faggot that's an Unknown rule!");
                        break;
                }
            }
        }
    });
 
    API.on(API.DJ_ADVANCE, DJ_ADVANCE);
    function DJ_ADVANCE(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && mubBot.settings.removedFilter){
                API.sendChat("/me This video may be unavailable!!");
            }
        }, 1500);
 
        cancel = false;
    }
 
 
    botMethods.loadStorage();
    console.log("boombot version " + boombot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/9vurzR');
    }, 1000);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat("A bot with the version "+boombot.misc.version+" has arrived the Boombox!")
